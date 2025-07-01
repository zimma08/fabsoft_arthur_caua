import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FuncionarioComponent } from './funcionario.component';

describe('FuncionarioComponent', () => {
  let component: FuncionarioComponent;
  let fixture: ComponentFixture<FuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FuncionarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
