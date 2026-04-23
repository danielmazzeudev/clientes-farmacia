import { Controller, Get, Query } from '@nestjs/common';
import { VendaQueryDto } from './dto/venda-query.dto';
import { VendasService } from './vendas.service';

@Controller('vendas')
export class VendasController {
  constructor(private readonly vendasService: VendasService) {}

  @Get()
  findAll(@Query() query: VendaQueryDto) {
    return this.vendasService.findAll(query);
  }
}
