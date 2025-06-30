import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormConcessionariaComponent } from '../form-concessionaria/form-concessionaria.component';


@Component({
  selector: 'app-concessionaria',
  templateUrl: './concessionaria.component.html',
  standalone: true,
  imports: [
    FormConcessionariaComponent
  ],
  styleUrls: ['./concessionaria.component.css']
})
export class ConcessionariaComponent implements OnInit {
  listaConcessionarias: any[] = [];
  concessionariaSelecionada: any = null;
  mostrarModal = false;
  mostrarFormulario = false; // controle do formulário
  private apiUrl = '/api/v1/concessionarias';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(dados => {
      this.listaConcessionarias = dados;
    });
  }

  novo() {
    this.mostrarFormulario = true;
  }

  salvarConcessionaria(concessionaria: any) {
    this.http.post(this.apiUrl, concessionaria).subscribe(() => {
      this.http.get<any[]>(this.apiUrl).subscribe(dados => {
        this.listaConcessionarias = dados;
        this.mostrarFormulario = false;
      });
    });
  }

  fecharFormulario() {
    this.mostrarFormulario = false;
  }

  alterar(umaConcessionaria: any) {
    this.concessionariaSelecionada = { ...umaConcessionaria };
    // abrir modal de edição, se houver
  }

  abrirConfirmacao(umaConcessionaria: any) {
    this.concessionariaSelecionada = umaConcessionaria;
    this.mostrarModal = true;
  }

  fecharConfirmacao() {
    this.concessionariaSelecionada = null;
    this.mostrarModal = false;
  }

  confirmarExclusao() {
    if (this.concessionariaSelecionada) {
      this.http.delete(`${this.apiUrl}/${this.concessionariaSelecionada.id}`).subscribe(() => {
        this.listaConcessionarias = this.listaConcessionarias.filter(c => c.id !== this.concessionariaSelecionada.id);
        this.fecharConfirmacao();
      });
    }
  }
}
