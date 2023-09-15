import { TestBed } from '@angular/core/testing';

import { PontosDeColetaService } from './pontos-de-coleta.service';

describe('PontosDeColetaService', () => {
  let service: PontosDeColetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PontosDeColetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
