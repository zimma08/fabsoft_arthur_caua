import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-funcionario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {
  @Input() funcionario: any = { nome: '', email: '', senha: '' };
  @Output() salvar = new EventEmitter<any>();
  listaConcessionarias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('/api/v1/concessionarias').subscribe(dados => {
      this.listaConcessionarias = dados;
    });
  }

  onSalvar() {
    this.salvar.emit(this.funcionario);
  }
}