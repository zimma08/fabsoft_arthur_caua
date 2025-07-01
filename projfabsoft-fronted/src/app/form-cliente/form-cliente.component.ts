import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { ClienteService } from '../service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-cliente',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css'], // Corrigido: era styleUrl (plural)
  providers: [ClienteService]
})
export class FormClienteComponent {
  cliente: Cliente = new Cliente();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.clienteService.getClienteById(id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }
  }

  salvar() {
    this.clienteService.saveCliente(this.cliente).subscribe(() => {
      this.router.navigate(['clientes']);
    });
  }
}
