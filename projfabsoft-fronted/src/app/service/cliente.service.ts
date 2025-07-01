import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/v1/clientes'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  saveCliente(cliente:Cliente){
    if(cliente.id){
      return this.http.put(this.apiUrl + '/' + cliente.id, cliente);
    }
    return this.http.post(this.apiUrl,cliente);
  }

  getClienteById(id: any) {
    return this.http.get<Cliente>(this.apiUrl + '/' + id);
  }

  excluirCliente(id: any){
    return this.http.delete<Cliente>(this.apiUrl + '/' + id);
  }
}