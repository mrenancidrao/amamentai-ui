import { errorHandler } from '@angular/platform-browser/src/browser';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(
    private auth: AuthService,
    // tslint:disable-next-line:no-shadowed-variable
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }


  private login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(() => {
      this.router.navigate(['/agenda']);
    })
    .catch(erro => {
      this.errorHandler.handle(erro);
    });
  }

}
