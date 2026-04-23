import { ItemVenda } from './item-venda.entity';

export class Venda {
  constructor(
    public readonly id: number,
    public readonly clienteId: number,
    public readonly data: string,
    public readonly status: 'concluida' | 'pendente' | 'cancelada',
    public readonly formaPagamento: 'pix' | 'credito' | 'debito' | 'dinheiro',
    public readonly itens: ItemVenda[],
    public readonly valorTotal: number,
  ) {}
}
