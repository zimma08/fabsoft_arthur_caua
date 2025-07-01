import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carro',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {
  listaCarros: any[] = [];

  mostrarModal = false;

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private carroSelecionado!: any;
  private apiUrl = '/api/v1/carros';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarCarros();
  }

  listarCarros() {
    this.http.get<any[]>(this.apiUrl).subscribe(dados => {
      this.listaCarros = dados;
    });
  }

  novo() {
    this.router.navigate(['carros/novo']);
  }

  alterar(carro: any) {
    this.router.navigate(['carros/alterar', carro.id]);
  }

  abrirConfirmacao(carro: any) {
    this.carroSelecionado = carro;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.http.delete(`${this.apiUrl}/${this.carroSelecionado.id}`).subscribe(
      () => {
        this.fecharConfirmacao();
        this.listarCarros();
      },
      error => {
        console.error('Erro ao excluir carro:', error);
      }
    );
  }
}
