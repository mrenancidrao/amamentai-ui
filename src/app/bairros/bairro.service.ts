import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class BairroService {

  bairrosUrl: string;

  constructor(private http: Http) {
    this.bairrosUrl = `${environment.apiUrl}/bairro`;
   }

  listarTodos(): Promise<any> {

    return this.http.get(`${this.bairrosUrl}`)
      .toPromise()
      .then(response => response.json());
  }

}
