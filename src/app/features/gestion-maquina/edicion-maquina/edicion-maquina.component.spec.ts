import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionMaquinaComponent } from './edicion-maquina.component';

describe('EdicionMaquinaComponent', () => {
  let component: EdicionMaquinaComponent;
  let fixture: ComponentFixture<EdicionMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicionMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
