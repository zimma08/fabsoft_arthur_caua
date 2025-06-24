import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { FuncionarioService } from '../service/funcionario.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-funcionario',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './funcionario.component.html',
  styleUrl: './funcionario.component.css',
  providers: [FuncionarioService, Router]
})

export class FuncionarioComponent implements OnInit {
  listaFuncionarios: Funcionario[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private funcionarioSelecionado!: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarFuncionarios();
  }

  listarFuncionarios() {
    console.log("Carregando funcionarios...");
    this.funcionarioService.getFuncionarios().subscribe(funcionarios => {
      this.listaFuncionarios = funcionarios;
    });
  }

  novo() {
    this.router.navigate(['funcionarios/novo']);
  }

  alterar(funcionario:Funcionario) {
    this.router.navigate(['funcionarios/alterar', funcionario.id]);
  }

  abrirConfirmacao(funcionario:Funcionario) {
    this.funcionarioSelecionado = funcionario;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.funcionarioService.excluirFuncionario(this.funcionarioSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.listarFuncionarios();
      },
      error => {
        console.error('Erro ao excluir funcionarios:', error);
      }
    );
  }
}
