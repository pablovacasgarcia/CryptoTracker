import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const autentificacionGuard: CanActivateFn = (route, state) => {
  let router=inject(Router);

  let sesion = inject(LoginService);
  if (sesion.usuario){
    return true;
  } else {
    router.navigate(['']);
    return false;
  }

};
