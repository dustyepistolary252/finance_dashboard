/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { FinanceQueryDto } from './dto/finance-query.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { FinanceRecord } from './entities/finance.entity';

type CurrentUser = {
  userId: number;
  role: Role;
};

@Injectable()
export class FinanceService {
  constructor(
    @InjectRepository(FinanceRecord)
    private readonly repo: Repository<FinanceRecord>,
  ) {}

  async create(dto: CreateFinanceDto, currentUser: CurrentUser) {
    const record = this.repo.create({
      ...dto,
      user: { id: currentUser.userId } as any,
    });

    const saved = await this.repo.save(record);
    return this.findOne(saved.id, currentUser);
  }

  async findAll(query: FinanceQueryDto, currentUser: CurrentUser) {
    const {
      type,
      category,
      startDate,
      endDate,
      page = 1,
      limit = 10,
      userId,
    } = query;

    const qb = this.repo
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.user', 'user')
      .where('r.deletedAt IS NULL');

    if (currentUser.role === Role.ADMIN) {
      if (userId) {
        qb.andWhere('user.id = :userId', { userId });
      }
    } else {
      qb.andWhere('user.id = :currentUserId', {
        currentUserId: currentUser.userId,
      });
    }

    if (type) {
      qb.andWhere('r.type = :type', { type });
    }

    if (category) {
      qb.andWhere('r.category = :category', { category });
    }

    if (startDate) {
      qb.andWhere('r.date >= :startDate', { startDate });
    }

    if (endDate) {
      qb.andWhere('r.date <= :endDate', { endDate });
    }

    const [data, total] = await qb
      .orderBy('r.date', 'DESC')
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();

    return { data, total, page, limit };
  }

  async findOne(id: number, currentUser: CurrentUser) {
    const qb = this.repo
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.user', 'user')
      .where('r.id = :id', { id })
      .andWhere('r.deletedAt IS NULL');

    if (currentUser.role !== Role.ADMIN) {
      qb.andWhere('user.id = :currentUserId', {
        currentUserId: currentUser.userId,
      });
    }

    const record = await qb.getOne();
    if (!record) {
      throw new NotFoundException('Record not found');
    }

    return record;
  }

  async update(id: number, dto: UpdateFinanceDto, currentUser: CurrentUser) {
    const record = await this.repo.findOne({ where: { id } });
    if (!record) {
      throw new NotFoundException('Record not found');
    }

    Object.assign(record, dto);
    const saved = await this.repo.save(record);
    return this.findOne(saved.id, currentUser);
  }

  async remove(id: number) {
    const record = await this.repo.findOne({ where: { id } });
    if (!record) {
      throw new NotFoundException('Record not found');
    }

    await this.repo.softDelete(id);
    return { message: 'Record deleted successfully' };
  }
}
