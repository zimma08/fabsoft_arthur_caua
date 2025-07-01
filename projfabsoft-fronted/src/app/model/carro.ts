export interface Carro {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  cliente: {
    id: number;
    nome: string;
  };
}