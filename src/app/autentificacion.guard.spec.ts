import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autentificacionGuard } from './autentificacion.guard';

describe('autentificacionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autentificacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
