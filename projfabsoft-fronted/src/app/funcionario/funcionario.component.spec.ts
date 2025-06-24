import { ComponentFixture, TestBed } from '@angular/core/testing';

import { funcionarioComponent } from './funcionario.component';

describe('FuncionarioComponent', () => {
  let component: funcionarioComponent;
  let fixture: ComponentFixture<funcionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [funcionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(funcionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
