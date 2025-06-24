import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { FormFuncionarioComponent } from './form-funcionario.component';

describe('FormFuncionarioComponent', () => {
  let component: FormFuncionarioComponent;
  let fixture: ComponentFixture<FormFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        FormFuncionarioComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});