import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Verificar si existe un token en el localStorage
    const token = localStorage.getItem('token');
    
    if (token) {
      // Usuario autenticado, permitir acceso
      return true;
    }

    // Usuario no autenticado, redirigir al login
    this.router.navigate(['/login']);
    return false;
  }
}