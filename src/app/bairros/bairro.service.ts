import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class BairroService {

  bairrosUrl: string;

  constructor(private http: AuthHttp) {
  this.bairrosUrl = `${environment.apiUrl}/bairro`;
   }

  listarTodos(): Promise<any> {


    return this.http.get(`${this.bairrosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
