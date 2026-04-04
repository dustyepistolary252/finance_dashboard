/* eslint-disable prettier/prettier */
import { IsEnum } from 'class-validator';
import { Role } from '../entities/user.entity';

export class UpdateUserRoleDto {
  @IsEnum(Role)
  role!: Role;
}