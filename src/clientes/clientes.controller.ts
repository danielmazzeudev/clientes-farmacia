import { Controller, Get, Query } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClienteQueryDto } from './dto/cliente-query.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  findAll(@Query() query: ClienteQueryDto) {
    return this.clientesService.findAll(query);
  }
}
