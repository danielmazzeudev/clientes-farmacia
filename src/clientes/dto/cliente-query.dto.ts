import { ApiPropertyOptional } from '@nestjs/swagger';

export class ClienteQueryDto {
  @ApiPropertyOptional({ example: '1', description: 'Filtra pelo ID do cliente' })
  id?: string;

  @ApiPropertyOptional({
    example: 'Maria',
    description: 'Filtra clientes pelo nome',
  })
  nome?: string;

  @ApiPropertyOptional({
    example: 'Sao Paulo',
    description: 'Filtra clientes pela cidade',
  })
  cidade?: string;

  @ApiPropertyOptional({ example: 'SP', description: 'Filtra clientes pela UF' })
  uf?: string;

  @ApiPropertyOptional({
    example: 'true',
    description: 'Filtra clientes ativos/inativos',
  })
  ativo?: string;
}
