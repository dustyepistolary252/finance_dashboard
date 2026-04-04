/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FinanceService } from './finance.service';
import { FinanceController } from './finance.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinanceRecord } from './entities/finance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FinanceRecord]),
  ],
  providers: [FinanceService],
  controllers: [FinanceController]
})
export class FinanceModule {}
