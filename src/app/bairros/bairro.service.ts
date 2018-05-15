import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class BairroService {

  bairrosUrl = 'http://localhost:8080/bairro';

  constructor(private http: AuthHttp) { }

  listarTodos(): Promise<any> {


    return this.http.get(`${this.bairrosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
