export class Produto {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly categoria: string,
    public readonly fabricante: string,
    public readonly preco: number,
    public readonly estoque: number,
    public readonly controlado: boolean,
    public readonly sku: string,
  ) {}
}
