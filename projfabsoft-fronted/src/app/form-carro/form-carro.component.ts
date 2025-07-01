import { Component } from '@angular/core';
import { Carro } from '../model/carro';
import { CarroService } from '../service/carro.service';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-form-carro',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-carro.component.html',
  styleUrl: './form-carro.component.css',
  providers: [CarroService, ClienteService]
})
export class FormCarroComponent {
  carro: Carro = { id: 0, marca: '', modelo: '', ano: new Date().getFullYear(), cliente: { id: 0, nome: '' } };
  clientes: Cliente[] = [];

  constructor(
    private carroService: CarroService,
    private clienteService: ClienteService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.carroService.getCarroById(id).subscribe(carro => {
        this.carro = carro;
      });
    }
    this.clienteService.getAllClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  salvar() {
    this.carroService.saveCarro(this.carro)
      .subscribe(resultado => {
        this.router.navigate(['carros']);
      });
  }
}