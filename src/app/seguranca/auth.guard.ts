import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.isAccessTokenInvalid()) {
      console.log('Navegação com acces token inválido. Obtendo novo access token...');

      return this.auth.obterNovoAccessToken()
        .then(() => {
          if (this.auth.isAccessTokenInvalid()) {
            this.router.navigate(['/login']);

            return false;
          }

          return true;
        });
    } else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
        this.router.navigate(['/nao-autorizado']);
        return false;
    }

    return true;
  }
}
