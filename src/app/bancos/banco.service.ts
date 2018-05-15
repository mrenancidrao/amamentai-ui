import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BancoService {

  bancosUrl = 'http://localhost:8080/banco';

  constructor(private http: AuthHttp) { }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.bancosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
