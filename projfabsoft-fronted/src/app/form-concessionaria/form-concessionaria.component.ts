import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-concessionaria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-concessionaria.component.html',
  styleUrls: ['./form-concessionaria.component.css']
})
export class FormConcessionariaComponent {
  @Input() concessionaria: any = { nome: '' };
  @Output() salvar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  onSubmit() {
    this.salvar.emit(this.concessionaria);
  }

  onCancel() {
    this.cancelar.emit();
  }
}