import { AuthHttp } from 'angular2-jwt';
import { Agendamento } from './../core/model';

import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { environment } from '../../environments/environment.prod';
import { AuthService } from '../seguranca/auth.service';

export class AgendamentoFiltro {
  doadoraNome: string;
  dataAgenda: Date;
  pessoaId: string;
  status: string;
  pagina = 0;
  itensPorPagina = 10;
}

export class StatusAgendaFiltro {
  agendaId: string;
  statusId: string;
}

@Injectable()
export class AgendamentoService {

  agendamentosUrl: string;

  constructor(
      private http: AuthHttp,
      private auth: AuthService
    ) {
    this.agendamentosUrl = `${environment.apiUrl}`;
    // this.agendamentosUrl = `http://localhost:8080`;
  }

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

    if (filtro.pessoaId) {
      params.set('pessoaId', filtro.pessoaId);
    }

    if (filtro.status) {
      params.set('status', filtro.status);
    }

    return this.http.get(`${this.agendamentosUrl}/vAgenda`, { search: params })
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

  pesquisarStatusAgenda(filtro: StatusAgendaFiltro): Promise<any> {
    const params = new URLSearchParams();

    if (filtro.agendaId) {
      params.set('agendaId', filtro.agendaId);
    }

    if (filtro.statusId) {
      params.set('statusId', filtro.statusId);
    }

    return this.http.get(`${this.agendamentosUrl}/statusAgenda`, { search: params })
     .toPromise()
     .then(response => {
       const responseJson = response.json();
       const statusAgendamentos = responseJson.content;

       const resultado = {
         statusAgendamentos
       };

       return resultado;

      });
  }

  listarTodos(): Promise<any> {
    return this.http.get(`${this.agendamentosUrl}/vAgenda`)
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {

    return this.http.delete(`${this.agendamentosUrl}/vAgenda/${id}`)
      .toPromise()
      .then(() => null);
  }

  confirmarAgendamento(agenda: Agendamento): Promise<Agendamento> {

    console.log(JSON.stringify(this.auth.jwtPayload.userId));

    return this.http.put(`${this.agendamentosUrl}/agenda/${agenda.id}/confirmar`, JSON.stringify(this.auth.jwtPayload.userId))
      .toPromise()
      .then(() => null);

  }

  adicionar(agendamento: Agendamento): Promise<Agendamento> {

    return this.http.post(`${this.agendamentosUrl}/agenda`, JSON.stringify(agendamento))
        .toPromise()
        .then(response => response.json());
  }

  buscarPorId(id: number): Promise<Agendamento> {

    return this.http.get(`${this.agendamentosUrl}/vAgenda/${id}`)
      .toPromise()
      .then(response => {
        const doadora = response.json() as Agendamento;

        this.converterStringsParaDatas([doadora]);

        return doadora;
      });
  }

  converterStringsParaDatas(agendamentos: Agendamento[]) {
    for (const agendamento of agendamentos) {
      agendamento.data = this.converterStringParaData(agendamento.data);
    }
  }


  converterStringParaData(data: any) {
    return moment(data, 'YYYY-MM-DD').toDate();
  }

  converterFormatoDeData(data: any) {
    return moment(data, 'YYYY-MM-DD').format('DD/MM/YYYY');
  }

}
