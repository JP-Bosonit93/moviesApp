import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let routeID: string | undefined = route.routeConfig?.path;
    let status!: number;
    this.authService.getStatus().subscribe((res) => {status = res, console.log(res)});
    console.log(status)
    if (routeID !== undefined) {
      switch (routeID) {
        case 'top':
          // Si estas logueado puedes acceder a top
          if (this.authService.checkIsLoggedStatus()) {
            return true;
          } else {
            alert('solo acceso bajo logueo');
          }
          break;
        case 'search':
          // si no estas logueado no puedes acceder a search
          if (status == 2) {
            return true;
          } else {
            alert('acceso sólo bajo logue y registro premium');
          }
          break;

        default:
          return true;
      }
    }
    return false;
  }
}
