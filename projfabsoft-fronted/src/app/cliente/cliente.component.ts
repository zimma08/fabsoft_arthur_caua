import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css',
  providers: [ClienteService]
})
export class ClienteComponent implements OnInit {
  listaClientes: Cliente[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private clienteSelecionado!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    console.log("Carregando clientes...");
    this.clienteService.getClientes().subscribe(clientes => {
      this.listaClientes = clientes;
    });
  }

  novo() {
    this.router.navigate(['cliente/novo']);
  }

  alterar(cliente: Cliente) {
    this.router.navigate(['clientes/alterar', cliente.id]);
  }

  abrirConfirmacao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.clienteService.excluirCliente(this.clienteSelecionado.id).subscribe(
      () => {
        this.fecharConfirmacao();
        this.listarClientes();
      },
      error => {
        console.error('Erro ao excluir cliente:', error);
      }
    );
  }
}
