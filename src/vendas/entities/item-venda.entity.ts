export class ItemVenda {
  constructor(
    public readonly produtoId: number,
    public readonly quantidade: number,
    public readonly precoUnitario: number,
    public readonly subtotal: number,
  ) {}
}
