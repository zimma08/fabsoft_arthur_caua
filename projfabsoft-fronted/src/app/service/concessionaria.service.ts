import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Concessionaria {
  id: number;
  nome: string;
  // adicione outros campos conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class ConcessionariaService {
  private apiUrl = 'http://localhost:8080/api/v1/concessionarias';

  constructor(private http: HttpClient) {}

  getAllConcessionarias(): Observable<Concessionaria[]> {
    return this.http.get<Concessionaria[]>(this.apiUrl);
  }

  // Adicione outros métodos (getById, save, delete) conforme necessário
}