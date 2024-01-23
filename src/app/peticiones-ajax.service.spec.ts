import { TestBed } from '@angular/core/testing';

import { PeticionesAJAXService } from './peticiones-ajax.service';

describe('PeticionesAJAXService', () => {
  let service: PeticionesAJAXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesAJAXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
