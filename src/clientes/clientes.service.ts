import { Injectable } from '@nestjs/common';
import { MockDatabaseService } from '../common/database/mock-database.service';
import { parseBoolean, parseNumber } from '../common/types/query.types';
import { ClienteQueryDto } from './dto/cliente-query.dto';

@Injectable()
export class ClientesService {
  constructor(private readonly databaseService: MockDatabaseService) {}

  findAll(filters: ClienteQueryDto) {
    const id = parseNumber(filters.id);
    const ativo = parseBoolean(filters.ativo);

    return this.databaseService.getClientes().filter((cliente) => {
      const matchesId = id === undefined || cliente.id === id;
      const matchesNome =
        !filters.nome ||
        cliente.nome.toLowerCase().includes(filters.nome.toLowerCase());
      const matchesCidade =
        !filters.cidade ||
        cliente.cidade.toLowerCase().includes(filters.cidade.toLowerCase());
      const matchesUf =
        !filters.uf || cliente.uf.toLowerCase() === filters.uf.toLowerCase();
      const matchesAtivo = ativo === undefined || cliente.ativo === ativo;

      return (
        matchesId && matchesNome && matchesCidade && matchesUf && matchesAtivo
      );
    });
  }
}
