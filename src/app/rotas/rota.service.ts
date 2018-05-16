import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class RotaService {

  rotasUrl: string;

  constructor(private http: AuthHttp) {
  this.rotasUrl = `${environment.apiUrl}/rota`;
  }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.rotasUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
