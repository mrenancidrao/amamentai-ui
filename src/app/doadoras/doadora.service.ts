
import { Http } from '@angular/http';
import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class DoadoraFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class DoadoraService {

  DoadorasUrl = 'http://localhost:8080/doadora';

  constructor(private http: Http) { }

  pesquisar(filtro: DoadoraFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
    }

    return this.http.get(`${this.DoadorasUrl}`, { headers, search: params })
     .toPromise()
     .then(response => {
       const responseJson = response.json();
       const doadoras = responseJson.content;

       const resultado = {
         doadoras,
         total: responseJson.totalElements
       };

       return resultado;

      });
  }

  listarTodas(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.DoadorasUrl}`, { headers })
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {
    const headers = new Headers();

    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.delete(`${this.DoadorasUrl}/${id}`, { headers })
      .toPromise()
      .then(() => null);
  }


}
