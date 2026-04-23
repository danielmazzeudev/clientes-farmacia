import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProdutoQueryDto {
  @ApiPropertyOptional({ example: '1', description: 'Filtra pelo ID do produto' })
  id?: string;

  @ApiPropertyOptional({
    example: 'Dipirona',
    description: 'Filtra produtos pelo nome',
  })
  nome?: string;

  @ApiPropertyOptional({
    example: 'Analgesico',
    description: 'Filtra produtos pela categoria',
  })
  categoria?: string;

  @ApiPropertyOptional({
    example: 'EMS',
    description: 'Filtra produtos pelo fabricante',
  })
  fabricante?: string;

  @ApiPropertyOptional({
    example: 'false',
    description: 'Filtra produtos controlados ou nao',
  })
  controlado?: string;

  @ApiPropertyOptional({
    example: '10',
    description: 'Filtra produtos com preco minimo',
  })
  precoMin?: string;

  @ApiPropertyOptional({
    example: '100',
    description: 'Filtra produtos com preco maximo',
  })
  precoMax?: string;
}
