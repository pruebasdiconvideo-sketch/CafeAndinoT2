import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Rol } from '../models/usuario';
import { AuthService } from '../services/auth.service';

/** Protege rutas: si no hay sesión en LocalStorage, redirige al Home. */
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.autenticado() ? true : router.createUrlTree(['/']);
};

/** Permite el acceso solo al rol indicado; sin sesión va al Home, con otro rol al Dashboard. */
export const rolGuard =
  (rol: Rol): CanActivateFn =>
  () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (!auth.autenticado()) return router.createUrlTree(['/']);
    return auth.sesion()?.rol === rol ? true : router.createUrlTree(['/dashboard']);
  };
