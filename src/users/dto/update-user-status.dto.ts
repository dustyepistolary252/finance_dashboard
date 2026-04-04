/* eslint-disable prettier/prettier */
import { IsBoolean } from 'class-validator';

export class UpdateUserStatusDto {
  @IsBoolean()
  isActive!: boolean;
}