import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarroService } from '../service/carro.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carro.component.html'
})
export class CarroComponent implements OnInit {
  listaCarros: any[] = [];
  carroSelecionado: any = null;

  constructor(
    private router: Router,
    private carroService: CarroService,
    private http: HttpClient // Adicione o HttpClient aqui
  ) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/v1/carros')
      .subscribe(data => this.listaCarros = data);
  }

  novo() {
    this.router.navigate(['carros/novo']);
  }

  alterar(carro: any) {
    // Navegar para o formulário de alteração
  }

  abrirConfirmacao(carro: any) {
    this.carroSelecionado = carro;
    // Abrir modal de confirmação
  }

  fecharConfirmacao() {
    this.carroSelecionado = null;
    // Fechar modal
  }

  confirmarExclusao() {
    if (this.carroSelecionado) {
      // Chamar serviço para excluir
      // this.carroService.delete(this.carroSelecionado.id).subscribe(...)
      this.fecharConfirmacao();
    }
  }
}