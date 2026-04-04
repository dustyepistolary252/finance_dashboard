/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { FinanceRecord } from 'src/finance/entities/finance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinanceRecord])],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}