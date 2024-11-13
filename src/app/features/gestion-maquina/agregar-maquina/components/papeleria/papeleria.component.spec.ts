import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapeleriaComponent } from './papeleria.component';

describe('PapeleriaComponent', () => {
  let component: PapeleriaComponent;
  let fixture: ComponentFixture<PapeleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PapeleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PapeleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
