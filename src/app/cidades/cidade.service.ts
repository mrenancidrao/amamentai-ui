import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CidadeService {

  cidadesUrl = 'http://localhost:8080/cidade';

  constructor(private http: AuthHttp) { }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.cidadesUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
