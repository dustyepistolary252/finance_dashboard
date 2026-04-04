/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Role } from 'src/users/entities/user.entity';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { FinanceQueryDto } from './dto/finance-query.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { FinanceService } from './finance.service';

@Controller('finance')
@UseGuards(JwtAuthGuard, RolesGuard)
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Roles(Role.ADMIN)
  @Post()
  create(@Body() dto: CreateFinanceDto, @Req() req: any) {
    return this.financeService.create(dto, req.user);
  }

  @Roles(Role.ANALYST, Role.ADMIN)
  @Get()
  findAll(@Query() query: FinanceQueryDto, @Req() req: any) {
    return this.financeService.findAll(query, req.user);
  }

  @Roles(Role.ANALYST, Role.ADMIN)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number, @Req() req: any) {
    return this.financeService.findOne(id, req.user);
  }

  @Roles(Role.ADMIN)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateFinanceDto,
    @Req() req: any,
  ) {
    return this.financeService.update(id, dto, req.user);
  }

  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.financeService.remove(id);
  }
}
