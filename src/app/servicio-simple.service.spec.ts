import { TestBed } from '@angular/core/testing';

import { ServicioSimpleService } from './servicio-simple.service';

describe('ServicioSimpleService', () => {
  let service: ServicioSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
