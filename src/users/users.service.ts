/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User, Role } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  async createUser(data: CreateUserDto) {
    const existing = await this.repo.findOne({ where: { email: data.email } });
    if (existing) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.repo.create({
      email: data.email,
      password: hashedPassword,
      role: data.role ?? Role.VIEWER,
      isActive: data.isActive ?? true,
    });

    const saved = await this.repo.save(user);
    return this.toSafeUser(saved);
  }

  async register(email: string, password: string) {
    return this.createUser({
      email,
      password,
      role: Role.VIEWER,
      isActive: true,
    });
  }

  async findAll() {
    return this.repo.find({
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
      order: { createdAt: 'DESC' },
    });
  }

  async findSafeById(id: number) {
    const user = await this.repo.findOne({
      where: { id },
      select: {
        id: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.repo
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email })
      .getOne();
  }

  async updateRole(id: number, role: Role) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.role = role;
    const saved = await this.repo.save(user);
    return this.toSafeUser(saved);
  }

  async updateStatus(id: number, isActive: boolean) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    user.isActive = isActive;
    const saved = await this.repo.save(user);
    return this.toSafeUser(saved);
  }

  private toSafeUser(user: User) {
    const { password, ...safeUser } = user as User & { password?: string };
    return safeUser;
  }
}
