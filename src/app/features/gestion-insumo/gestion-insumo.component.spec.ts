import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInsumoComponent } from './gestion-insumo.component';

describe('GestionInsumoComponent', () => {
  let component: GestionInsumoComponent;
  let fixture: ComponentFixture<GestionInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionInsumoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
