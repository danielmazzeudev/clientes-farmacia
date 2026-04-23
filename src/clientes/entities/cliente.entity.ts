export class Cliente {
  constructor(
    public readonly id: number,
    public readonly nome: string,
    public readonly email: string,
    public readonly telefone: string,
    public readonly cpf: string,
    public readonly cidade: string,
    public readonly uf: string,
    public readonly ativo: boolean,
    public readonly cadastradoEm: string,
  ) {}
}
