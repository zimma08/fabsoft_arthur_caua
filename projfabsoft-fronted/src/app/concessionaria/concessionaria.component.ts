import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormConcessionariaComponent } from '../form-concessionaria/form-concessionaria.component';
import { CommonModule } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-concessionaria',
  templateUrl: './concessionaria.component.html',
  standalone: true,
  imports: [
    FormConcessionariaComponent, CommonModule
  ],
  styleUrls: ['./concessionaria.component.css']
})

export class ConcessionariaComponent implements OnInit {
  listaConcessionarias: any[] = [];

mostrarModal = false; 

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private concessionariaSelecionada!: any;
  mostrarFormulario = false;
  private apiUrl = '/api/v1/concessionarias';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarConcessionarias();
  }

  listarConcessionarias() {
    this.http.get<any[]>(this.apiUrl).subscribe(dados => {
      this.listaConcessionarias = dados;
    });
  }

  novo() {
    this.mostrarFormulario = true;
  }

  salvarConcessionaria(concessionaria: any) {
    // Exemplo de POST, ajuste conforme sua API
    this.http.post(this.apiUrl, concessionaria).subscribe(() => {
      this.listarConcessionarias();
      this.mostrarFormulario = false;
    });
  }

  fecharFormulario() {
    this.mostrarFormulario = false;
  }

  alterar(concessionaria: any) {
    this.router.navigate(['concessionarias/alterar', concessionaria.id]);
  }

  abrirConfirmacao(concessionaria: any) {
    this.concessionariaSelecionada = concessionaria;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.http.delete(`${this.apiUrl}/${this.concessionariaSelecionada.id}`).subscribe(
      () => {
        this.fecharConfirmacao();
        this.listarConcessionarias();
      },
      error => {
        console.error('Erro ao excluir concessionária:', error);
      }
    );
  }
}