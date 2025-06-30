import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConcessionariaComponent } from './form-concessionaria.component';

describe('FormConcessionariaComponent', () => {
  let component: FormConcessionariaComponent;
  let fixture: ComponentFixture<FormConcessionariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormConcessionariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConcessionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});