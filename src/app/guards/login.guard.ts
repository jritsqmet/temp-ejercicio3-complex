import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  let acceder= false;

  let temp = localStorage.getItem("acceso")

  if ( temp === 'T'){
    acceder= true;
  }

  return acceder;
  
};
