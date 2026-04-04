import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

export enum RecordType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

@Entity()
export class FinanceRecord {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user!: User;

  @Column('decimal', { precision: 12, scale: 2 })
  amount!: number;

  @Column({
    type: 'enum',
    enum: RecordType,
  })
  type!: RecordType;

  @Column()
  category!: string;

  @Column({ type: 'date' })
  date!: string;

  @Column({ nullable: true, default: null })
  notes?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}
