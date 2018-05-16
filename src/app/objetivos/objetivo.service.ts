import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class ObjetivoService {

  objetivosUrl: string;

  constructor(private http: AuthHttp) {
  this.objetivosUrl = `${environment.apiUrl}/objetivo`;
  }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.objetivosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
