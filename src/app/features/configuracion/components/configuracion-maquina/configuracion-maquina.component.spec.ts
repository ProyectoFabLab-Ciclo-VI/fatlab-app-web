import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionMaquinaComponent } from './configuracion-maquina.component';

describe('ConfiguracionMaquinaComponent', () => {
  let component: ConfiguracionMaquinaComponent;
  let fixture: ComponentFixture<ConfiguracionMaquinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracionMaquinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
