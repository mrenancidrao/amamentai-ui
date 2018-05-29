
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { AuthService } from '../auth.service';

import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  logando = false;

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }


  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha)
    .then(() => {



      if (this.auth.jwtPayload.tipoUserId.id == 1) {
        this.router.navigate(['/meusAgendamentos']);
      }

      if (this.auth.jwtPayload.tipoUserId.id == 2) {
        this.router.navigate(['/agenda']);
      }

    })
    .catch(erro => {
      this.logando = false;
      this.errorHandler.handle(erro);
    });
  }

}
