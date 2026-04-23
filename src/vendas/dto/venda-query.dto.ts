import { ApiPropertyOptional } from '@nestjs/swagger';

export class VendaQueryDto {
  @ApiPropertyOptional({ example: '1', description: 'Filtra pelo ID da venda' })
  id?: string;

  @ApiPropertyOptional({ example: '2', description: 'Filtra pelo ID do cliente' })
  clienteId?: string;

  @ApiPropertyOptional({ example: '3', description: 'Filtra pelo ID do produto' })
  produtoId?: string;

  @ApiPropertyOptional({
    example: 'concluida',
    description: 'Filtra vendas pelo status',
  })
  status?: string;

  @ApiPropertyOptional({
    example: 'cartao',
    description: 'Filtra vendas pela forma de pagamento',
  })
  formaPagamento?: string;

  @ApiPropertyOptional({
    example: '2026-04-01',
    description: 'Filtra vendas com data inicial',
  })
  dataInicio?: string;

  @ApiPropertyOptional({
    example: '2026-04-30',
    description: 'Filtra vendas com data final',
  })
  dataFim?: string;

  @ApiPropertyOptional({
    example: '50',
    description: 'Filtra vendas com valor minimo',
  })
  valorMin?: string;

  @ApiPropertyOptional({
    example: '500',
    description: 'Filtra vendas com valor maximo',
  })
  valorMax?: string;
}
