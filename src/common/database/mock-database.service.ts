import { Injectable } from '@nestjs/common';
import { Cliente } from '../../clientes/entities/cliente.entity';
import { Produto } from '../../produtos/entities/produto.entity';
import { ItemVenda } from '../../vendas/entities/item-venda.entity';
import { Venda } from '../../vendas/entities/venda.entity';

@Injectable()
export class MockDatabaseService {
  private readonly clientes: Cliente[] = [
    new Cliente(
      1,
      'Mariana Costa',
      'mariana.costa@email.com',
      '(11) 98811-2040',
      '247.581.930-14',
      'Sao Paulo',
      'SP',
      true,
      '2024-01-12',
    ),
    new Cliente(
      2,
      'Rafael Oliveira',
      'rafael.oliveira@email.com',
      '(31) 99102-4421',
      '615.238.790-00',
      'Belo Horizonte',
      'MG',
      true,
      '2024-02-03',
    ),
    new Cliente(
      3,
      'Camila Fernandes',
      'camila.fernandes@email.com',
      '(41) 99944-1022',
      '958.177.630-82',
      'Curitiba',
      'PR',
      true,
      '2024-03-18',
    ),
    new Cliente(
      4,
      'Bruno Martins',
      'bruno.martins@email.com',
      '(21) 98115-2234',
      '304.519.620-09',
      'Rio de Janeiro',
      'RJ',
      false,
      '2024-04-07',
    ),
    new Cliente(
      5,
      'Patricia Gomes',
      'patricia.gomes@email.com',
      '(51) 99731-0048',
      '189.420.350-60',
      'Porto Alegre',
      'RS',
      true,
      '2024-05-21',
    ),
    new Cliente(
      6,
      'Juliana Rocha',
      'juliana.rocha@email.com',
      '(71) 99285-7761',
      '473.901.260-71',
      'Salvador',
      'BA',
      true,
      '2024-06-30',
    ),
  ];

  private readonly produtos: Produto[] = [
    new Produto(
      1,
      'Dipirona 1g',
      'analgesico',
      'Medley',
      8.9,
      130,
      false,
      'FAR-0001',
    ),
    new Produto(
      2,
      'Paracetamol 750mg',
      'analgesico',
      'EMS',
      7.5,
      90,
      false,
      'FAR-0002',
    ),
    new Produto(
      3,
      'Amoxicilina 500mg',
      'antibiotico',
      'Neo Quimica',
      29.9,
      48,
      true,
      'FAR-0003',
    ),
    new Produto(
      4,
      'Loratadina 10mg',
      'antialergico',
      'Cimed',
      12.4,
      76,
      false,
      'FAR-0004',
    ),
    new Produto(
      5,
      'Omeprazol 20mg',
      'gastrointestinal',
      'Teuto',
      15.8,
      65,
      false,
      'FAR-0005',
    ),
    new Produto(
      6,
      'Vitamina C 1g',
      'suplemento',
      'Lavitan',
      22.9,
      52,
      false,
      'FAR-0006',
    ),
    new Produto(
      7,
      'Losartana 50mg',
      'hipertensao',
      'Eurofarma',
      18.9,
      110,
      true,
      'FAR-0007',
    ),
    new Produto(
      8,
      'Insulina NPH',
      'diabetes',
      'Novo Nordisk',
      43.5,
      24,
      true,
      'FAR-0008',
    ),
  ];

  private readonly vendas: Venda[] = [
    new Venda(
      1,
      1,
      '2025-02-12',
      'concluida',
      'pix',
      [new ItemVenda(1, 2, 8.9, 17.8), new ItemVenda(4, 1, 12.4, 12.4)],
      30.2,
    ),
    new Venda(
      2,
      2,
      '2025-02-14',
      'concluida',
      'credito',
      [new ItemVenda(3, 1, 29.9, 29.9), new ItemVenda(5, 2, 15.8, 31.6)],
      61.5,
    ),
    new Venda(
      3,
      3,
      '2025-02-20',
      'pendente',
      'debito',
      [new ItemVenda(2, 3, 7.5, 22.5)],
      22.5,
    ),
    new Venda(
      4,
      1,
      '2025-03-02',
      'concluida',
      'dinheiro',
      [new ItemVenda(6, 1, 22.9, 22.9), new ItemVenda(1, 1, 8.9, 8.9)],
      31.8,
    ),
    new Venda(
      5,
      5,
      '2025-03-07',
      'cancelada',
      'credito',
      [new ItemVenda(8, 1, 43.5, 43.5)],
      43.5,
    ),
    new Venda(
      6,
      6,
      '2025-03-08',
      'concluida',
      'pix',
      [new ItemVenda(7, 2, 18.9, 37.8), new ItemVenda(5, 1, 15.8, 15.8)],
      53.6,
    ),
    new Venda(
      7,
      2,
      '2025-03-15',
      'concluida',
      'pix',
      [new ItemVenda(4, 2, 12.4, 24.8), new ItemVenda(6, 1, 22.9, 22.9)],
      47.7,
    ),
    new Venda(
      8,
      3,
      '2025-03-18',
      'pendente',
      'credito',
      [new ItemVenda(3, 1, 29.9, 29.9), new ItemVenda(8, 1, 43.5, 43.5)],
      73.4,
    ),
  ];

  getClientes(): Cliente[] {
    return this.clientes;
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getVendas(): Venda[] {
    return this.vendas;
  }
}
