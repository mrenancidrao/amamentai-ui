import { AuthHttp } from 'angular2-jwt';
import { Agendamento } from './../core/model';

import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

export class AgendamentoFiltro {
  doadoraNome: string;
  dataAgenda: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class AgendamentoService {

  agendamentosUrl = 'http://localhost:8080/vAgenda';

  constructor(private http: AuthHttp) { }

  pesquisar(filtro: AgendamentoFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.doadoraNome) {
      params.set('doadoraNome', filtro.doadoraNome);
    }

    if (filtro.dataAgenda) {
      params.set('dataAgenda', moment(filtro.dataAgenda).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.agendamentosUrl}`, { search: params })
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

  listarTodos(): Promise<any> {
    return this.http.get(`${this.agendamentosUrl}`)
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {

    return this.http.delete(`${this.agendamentosUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(agendamento: Agendamento): Promise<Agendamento> {

    return this.http.post(`http://localhost:8080/agenda`, JSON.stringify(agendamento))
        .toPromise()
        .then(response => response.json());
  }

  buscarPorId(id: number): Promise<Agendamento> {

    return this.http.get(`${this.agendamentosUrl}/${id}`)
      .toPromise()
      .then(response => {
        const doadora = response.json() as Agendamento;

        this.converterStringsParaDatas([doadora]);

        return doadora;
      });
  }

  private converterStringsParaDatas(agendamentos: Agendamento[]) {
    for (const agendamento of agendamentos) {
      agendamento.data = moment(agendamento.data, 'YYYY-MM-DD').toDate();
    }
  }


}
