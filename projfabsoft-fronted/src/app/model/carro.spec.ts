import { Carro } from './carro';

describe('Carro', () => {
  it('should create an instance', () => {
    const carro: Carro = { id: 1, marca: 'Fiat', modelo: 'Uno', ano: 2020, cliente: { id: 1, nome: 'João' } };
    expect(carro).toBeTruthy();
  });
});