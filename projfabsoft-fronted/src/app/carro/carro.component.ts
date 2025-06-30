import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  listaCarros: any[] = [];
  carroSelecionado: any = null;
  mostrarModal = false; // controle do modal
  private apiUrl = '/api/v1/carros';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(dados => {
      this.listaCarros = dados;
    });
  }

  novo() {
    // Lógica para criar novo carro
  }

  alterar(umCarro: any) {
    this.carroSelecionado = { ...umCarro };
    // abrir modal de edição, se houver
  }

  abrirConfirmacao(umCarro: any) {
    this.carroSelecionado = umCarro;
    this.mostrarModal = true;
  }

  fecharConfirmacao() {
    this.carroSelecionado = null;
    this.mostrarModal = false;
  }

  confirmarExclusao() {
    if (this.carroSelecionado) {
      this.http.delete(`${this.apiUrl}/${this.carroSelecionado.id}`).subscribe(() => {
        this.listaCarros = this.listaCarros.filter(c => c.id !== this.carroSelecionado.id);
        this.fecharConfirmacao();
      });
    }
  }
}
