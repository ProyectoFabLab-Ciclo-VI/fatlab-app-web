import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionInsumoComponent } from './edicion-insumo.component';

describe('EdicionInsumoComponent', () => {
  let component: EdicionInsumoComponent;
  let fixture: ComponentFixture<EdicionInsumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicionInsumoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionInsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
