import { Injectable } from '@nestjs/common';
import { MockDatabaseService } from '../common/database/mock-database.service';
import { parseNumber } from '../common/types/query.types';
import { VendaQueryDto } from './dto/venda-query.dto';

@Injectable()
export class VendasService {
  constructor(private readonly databaseService: MockDatabaseService) {}

  findAll(filters: VendaQueryDto) {
    const id = parseNumber(filters.id);
    const clienteId = parseNumber(filters.clienteId);
    const produtoId = parseNumber(filters.produtoId);
    const valorMin = parseNumber(filters.valorMin);
    const valorMax = parseNumber(filters.valorMax);
    const clientes = this.databaseService.getClientes();
    const produtos = this.databaseService.getProdutos();

    return this.databaseService
      .getVendas()
      .filter((venda) => {
        const matchesId = id === undefined || venda.id === id;
        const matchesClienteId =
          clienteId === undefined || venda.clienteId === clienteId;
        const matchesProdutoId =
          produtoId === undefined ||
          venda.itens.some((item) => item.produtoId === produtoId);
        const matchesStatus =
          !filters.status ||
          venda.status.toLowerCase() === filters.status.toLowerCase();
        const matchesFormaPagamento =
          !filters.formaPagamento ||
          venda.formaPagamento.toLowerCase() ===
            filters.formaPagamento.toLowerCase();
        const matchesDataInicio =
          !filters.dataInicio || venda.data >= filters.dataInicio;
        const matchesDataFim =
          !filters.dataFim || venda.data <= filters.dataFim;
        const matchesValorMin =
          valorMin === undefined || venda.valorTotal >= valorMin;
        const matchesValorMax =
          valorMax === undefined || venda.valorTotal <= valorMax;

        return (
          matchesId &&
          matchesClienteId &&
          matchesProdutoId &&
          matchesStatus &&
          matchesFormaPagamento &&
          matchesDataInicio &&
          matchesDataFim &&
          matchesValorMin &&
          matchesValorMax
        );
      })
      .map((venda) => {
        const cliente = clientes.find((item) => item.id === venda.clienteId);

        return {
          ...venda,
          cliente: cliente
            ? {
                id: cliente.id,
                nome: cliente.nome,
                cidade: cliente.cidade,
                uf: cliente.uf,
              }
            : null,
          itens: venda.itens.map((item) => {
            const produto = produtos.find(
              (entry) => entry.id === item.produtoId,
            );

            return {
              ...item,
              produto: produto
                ? {
                    id: produto.id,
                    nome: produto.nome,
                    categoria: produto.categoria,
                  }
                : null,
            };
          }),
        };
      });
  }
}
