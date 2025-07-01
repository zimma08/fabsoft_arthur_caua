import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../model/carro';  // ajuste o caminho se necessário
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  // URL base da sua API de carros - ajuste conforme sua API backend
  apiURL = "http://localhost:8080/api/v1/carros";

  constructor(private http: HttpClient) { }

  // Busca todos os carros
  getCarros(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.apiURL);
  }

  // Salva um novo carro ou atualiza um existente
  saveCarro(carro: Carro): Observable<Carro> {
    if (carro.id) {
      return this.http.put<Carro>(`${this.apiURL}/${carro.id}`, carro);
    } else {
      return this.http.post<Carro>(this.apiURL, carro);
    }
  }

  // Busca um carro pelo ID
  getCarroById(id: number): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiURL}/${id}`);
  }

  // Exclui um carro pelo ID
  excluirCarro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
