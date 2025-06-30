import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-carro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-carro.component.html',
  styleUrls: ['./form-carro.component.css']
})
export class FormCarroComponent {
  @Input() carro: any = { marca: '', modelo: '', ano: '' };
  @Output() salvar = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<void>();

  onSubmit() {
    this.salvar.emit(this.carro);
  }

  onCancel() {
    this.cancelar.emit();
  }
}