import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormCarroComponent } from './form-carro.component';

describe('FormCarroComponent', () => {
  let component: FormCarroComponent;
  let fixture: ComponentFixture<FormCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormCarroComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});