import { ApiPropertyOptional } from '@nestjs/swagger';

export class VendaQueryDto {
  @ApiPropertyOptional({ description: 'Filtra pelo ID da venda' })
  id?: string;

  @ApiPropertyOptional({ description: 'Filtra pelo ID do cliente' })
  clienteId?: string;

  @ApiPropertyOptional({ description: 'Filtra pelo ID do produto' })
  produtoId?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas pelo status' })
  status?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas pela forma de pagamento' })
  formaPagamento?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas com data inicial' })
  dataInicio?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas com data final' })
  dataFim?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas com valor minimo' })
  valorMin?: string;

  @ApiPropertyOptional({ description: 'Filtra vendas com valor maximo' })
  valorMax?: string;
}
