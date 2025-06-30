import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcessionariaComponent } from './concessionaria.component';

describe('ConcessionariaComponent', () => {
  let component: ConcessionariaComponent;
  let fixture: ComponentFixture<ConcessionariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcessionariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcessionariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
