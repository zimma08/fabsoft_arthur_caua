import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConcessionariaService {
  private apiUrl = 'http://localhost:8080/api/v1/concessionarias';

  constructor(private http: HttpClient) {}

  deleteConcessionaria(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}