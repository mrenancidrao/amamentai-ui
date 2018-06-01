import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class MotivoService {

  motivosUrl: string;

  constructor(private http: AuthHttp) {
  this.motivosUrl = `${environment.apiUrl}/motivo`;
  }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.motivosUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
