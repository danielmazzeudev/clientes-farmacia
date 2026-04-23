import { ApiPropertyOptional } from '@nestjs/swagger';

export class ClienteQueryDto {
  @ApiPropertyOptional({ description: 'Filtra pelo ID do cliente' })
  id?: string;

  @ApiPropertyOptional({ description: 'Filtra clientes pelo nome' })
  nome?: string;

  @ApiPropertyOptional({ description: 'Filtra clientes pela cidade' })
  cidade?: string;

  @ApiPropertyOptional({ description: 'Filtra clientes pela UF' })
  uf?: string;

  @ApiPropertyOptional({ description: 'Filtra clientes ativos/inativos' })
  ativo?: string;
}
