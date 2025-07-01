import { Cliente } from './cliente';

describe('Cliente', () => {
  it('should create an instance', () => {
    const cliente: Cliente = { id: 1, nome: 'João', email: 'joao@email.com', senha: '123' };
    expect(cliente).toBeTruthy();
  });
});