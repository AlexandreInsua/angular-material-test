import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = () => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  if (userService.isLogged) return true;

  console.warn('navigation not allowed');
  return router.parseUrl('');
};
