import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class BancoService {

  bancosUrl: string;

  constructor(private http: AuthHttp) { 
    this.bancosUrl = `${environment.apiUrl}/banco`
  }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.bancosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
