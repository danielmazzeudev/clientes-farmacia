import { Injectable } from '@nestjs/common';
import { MockDatabaseService } from '../common/database/mock-database.service';
import { parseBoolean, parseNumber } from '../common/types/query.types';
import { ProdutoQueryDto } from './dto/produto-query.dto';

@Injectable()
export class ProdutosService {
  constructor(private readonly databaseService: MockDatabaseService) {}

  findAll(filters: ProdutoQueryDto) {
    const id = parseNumber(filters.id);
    const controlado = parseBoolean(filters.controlado);
    const precoMin = parseNumber(filters.precoMin);
    const precoMax = parseNumber(filters.precoMax);

    return this.databaseService.getProdutos().filter((produto) => {
      const matchesId = id === undefined || produto.id === id;
      const matchesNome =
        !filters.nome ||
        produto.nome.toLowerCase().includes(filters.nome.toLowerCase());
      const matchesCategoria =
        !filters.categoria ||
        produto.categoria.toLowerCase() === filters.categoria.toLowerCase();
      const matchesFabricante =
        !filters.fabricante ||
        produto.fabricante
          .toLowerCase()
          .includes(filters.fabricante.toLowerCase());
      const matchesControlado =
        controlado === undefined || produto.controlado === controlado;
      const matchesPrecoMin =
        precoMin === undefined || produto.preco >= precoMin;
      const matchesPrecoMax =
        precoMax === undefined || produto.preco <= precoMax;

      return (
        matchesId &&
        matchesNome &&
        matchesCategoria &&
        matchesFabricante &&
        matchesControlado &&
        matchesPrecoMin &&
        matchesPrecoMax
      );
    });
  }
}
