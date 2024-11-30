import { TestBed } from '@angular/core/testing';

import { ModeloPredefinidoService } from './modelo-predefinido.service';

describe('ModeloPredefinidoService', () => {
  let service: ModeloPredefinidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModeloPredefinidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
