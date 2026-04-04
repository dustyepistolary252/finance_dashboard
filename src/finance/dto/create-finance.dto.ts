import { Type } from 'class-transformer';
import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import { RecordType } from '../entities/finance.entity';

export class CreateFinanceDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  amount!: number;

  @IsEnum(RecordType)
  type!: RecordType;

  @IsString()
  category!: string;

  @IsDateString()
  date!: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
