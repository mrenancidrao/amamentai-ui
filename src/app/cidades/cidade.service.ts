import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class CidadeService {

  cidadesUrl: string;

  constructor(private http: AuthHttp) {
  this.cidadesUrl = `${environment.apiUrl}/cidade`;
  }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.cidadesUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
