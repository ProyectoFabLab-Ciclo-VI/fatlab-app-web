import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMaquinaComponent } from './gestion-maquina.component';

describe('GestionMaquinaComponent', () => {
  let component: GestionMaquinaComponent;
  let fixture: ComponentFixture<GestionMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestionMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
