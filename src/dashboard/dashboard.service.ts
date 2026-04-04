/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FinanceRecord } from 'src/finance/entities/finance.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(FinanceRecord)
    private readonly repo: Repository<FinanceRecord>,
  ) {}

  async getSummary(userId: number) {
    const income = await this.repo
      .createQueryBuilder('r')
      .select('SUM(r.amount)', 'total')
      .where('r.type = :type', { type: 'INCOME' })
      .andWhere('r.userId = :userId', { userId })
      .getRawOne();

    const expense = await this.repo
      .createQueryBuilder('r')
      .select('SUM(r.amount)', 'total')
      .where('r.type = :type', { type: 'EXPENSE' })
      .andWhere('r.userId = :userId', { userId })
      .getRawOne();

    const categoryData = await this.repo
      .createQueryBuilder('r')
      .select('r.category', 'category')
      .addSelect('SUM(r.amount)', 'total')
      .where('r.userId = :userId', { userId })
      .groupBy('r.category')
      .getRawMany();

    const monthlyRaw = await this.repo
      .createQueryBuilder('r')
      .select("DATE_FORMAT(r.date, '%Y-%m')", 'month')
      .addSelect(
        "SUM(CASE WHEN r.type = 'INCOME' THEN r.amount ELSE 0 END)",
        'income',
      )
      .addSelect(
        "SUM(CASE WHEN r.type = 'EXPENSE' THEN r.amount ELSE 0 END)",
        'expense',
      )
      .where('r.userId = :userId', { userId })
      .groupBy("DATE_FORMAT(r.date, '%Y-%m')")
      .orderBy('month', 'ASC')
      .getRawMany();

    const recentTransactions = await this.repo.find({
      where: { user: { id: userId } },
      order: { date: 'DESC' },
      take: 5,
    });

    const totalIncome = Number(income?.total) || 0;
    const totalExpense = Number(expense?.total) || 0;

    return {
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
      categoryBreakdown: categoryData.map((item) => ({
        category: item.category,
        total: Number(item.total) || 0,
      })),
      recentTransactions,
      monthlyTrends: monthlyRaw.map((item) => {
        const incomeValue = Number(item.income) || 0;
        const expenseValue = Number(item.expense) || 0;

        return {
          month: item.month,
          income: incomeValue,
          expense: expenseValue,
          net: incomeValue - expenseValue,
        };
      }),
    };
  }
}
