import { ApiPropertyOptional } from '@nestjs/swagger';

export class ProdutoQueryDto {
  @ApiPropertyOptional({ description: 'Filtra pelo ID do produto' })
  id?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos pelo nome' })
  nome?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos pela categoria' })
  categoria?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos pelo fabricante' })
  fabricante?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos controlados ou nao' })
  controlado?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos com preco minimo' })
  precoMin?: string;

  @ApiPropertyOptional({ description: 'Filtra produtos com preco maximo' })
  precoMax?: string;
}
