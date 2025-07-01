import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../model/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private apiUrl = 'http://localhost:8080/api/v1/carros'; // ajuste conforme seu backend

  constructor(private http: HttpClient) {}

  getCarroById(id: string): Observable<Carro> {
    return this.http.get<Carro>(`${this.apiUrl}/${id}`);
  }

  saveCarro(carro: Carro): Observable<Carro> {
    if (carro.id && carro.id !== 0) {
      return this.http.put<Carro>(`${this.apiUrl}/${carro.id}`, carro);
    } else {
      return this.http.post<Carro>(this.apiUrl, carro);
    }
  }
}