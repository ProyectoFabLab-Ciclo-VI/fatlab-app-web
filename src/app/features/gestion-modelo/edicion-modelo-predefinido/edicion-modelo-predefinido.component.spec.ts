import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionModeloPredefinidoComponent } from './edicion-modelo-predefinido.component';

describe('EdicionModeloPredefinidoComponent', () => {
  let component: EdicionModeloPredefinidoComponent;
  let fixture: ComponentFixture<EdicionModeloPredefinidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EdicionModeloPredefinidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicionModeloPredefinidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
