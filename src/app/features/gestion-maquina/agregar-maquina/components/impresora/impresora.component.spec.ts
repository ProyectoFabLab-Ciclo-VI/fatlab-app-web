import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpresoraComponent } from './impresora.component';

describe('ImpresoraComponent', () => {
  let component: ImpresoraComponent;
  let fixture: ComponentFixture<ImpresoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpresoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpresoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
