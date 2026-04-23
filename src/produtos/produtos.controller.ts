import { Controller, Get, Query } from '@nestjs/common';
import { ProdutoQueryDto } from './dto/produto-query.dto';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Get()
  findAll(@Query() query: ProdutoQueryDto) {
    return this.produtosService.findAll(query);
  }
}
