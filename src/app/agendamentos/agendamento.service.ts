
import { Http } from '@angular/http';
import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class AgendamentoFiltro {
  doadora: string;
  dataAgenda: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class AgendamentoService {

  agendamentosUrl = 'http://localhost:8080/vAgenda';

  constructor(private http: Http) { }

  pesquisar(filtro: AgendamentoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();

    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.doadora) {
      params.set('doadora', filtro.doadora);
    }

    if (filtro.dataAgenda) {
      params.set('dataAgenda', moment(filtro.dataAgenda).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.agendamentosUrl}`, { headers, search: params })
     .toPromise()
     .then(response => {
       const responseJson = response.json();
       const agendamentos = responseJson.content;

       const resultado = {
         agendamentos,
         total: responseJson.totalElements
       };

       return resultado;

      });
  }


}
