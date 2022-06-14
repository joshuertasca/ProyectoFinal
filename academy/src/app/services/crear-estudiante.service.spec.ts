import { TestBed } from '@angular/core/testing';

import { CrearEstudianteService } from './crear-estudiante.service';

describe('CrearEstudianteService', () => {
  let service: CrearEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
