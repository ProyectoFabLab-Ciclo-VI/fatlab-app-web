import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionRolComponent } from './configuracion-rol.component';

describe('ConfiguracionRolComponent', () => {
  let component: ConfiguracionRolComponent;
  let fixture: ComponentFixture<ConfiguracionRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracionRolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfiguracionRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
