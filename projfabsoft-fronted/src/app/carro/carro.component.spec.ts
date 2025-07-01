import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CarroComponent } from './carro.component';

describe('CarroComponent', () => {
  let component: CarroComponent;
  let fixture: ComponentFixture<CarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, CarroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
