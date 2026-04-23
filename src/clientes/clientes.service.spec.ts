import { Test, TestingModule } from '@nestjs/testing';
import { MockDatabaseModule } from '../common/database/mock-database.module';
import { ClientesService } from './clientes.service';

describe('ClientesService', () => {
  let service: ClientesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MockDatabaseModule],
      providers: [ClientesService],
    }).compile();

    service = module.get<ClientesService>(ClientesService);
  });

  it('filtra clientes por cidade', () => {
    const result = service.findAll({ cidade: 'Curitiba' });

    expect(result).toHaveLength(1);
    expect(result[0].nome).toBe('Camila Fernandes');
  });

  it('filtra clientes por status ativo', () => {
    const result = service.findAll({ ativo: 'false' });

    expect(result).toHaveLength(1);
    expect(result[0].nome).toBe('Bruno Martins');
  });
});
