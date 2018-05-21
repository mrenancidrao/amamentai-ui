import { AuthHttp } from 'angular2-jwt';
import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { Doadora } from '../core/model';
import { environment } from '../../environments/environment';

export class DoadoraFiltro {
  nome: string;
  pessoaId: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable()
export class DoadoraService {

  doadorasUrl: string;

  constructor(private http: AuthHttp) {
  this.doadorasUrl = `${environment.apiUrl}/doadora`;
  }

  pesquisar(filtro: DoadoraFiltro): Promise<any> {
    const params = new URLSearchParams();

    params.set('page', filtro.pagina.toString());
    params.set('size', filtro.itensPorPagina.toString());

    if (filtro.nome) {
      params.set('nome', filtro.nome);
      console.log(`Filtro com nome`);
    }

    if (filtro.pessoaId) {
      console.log(`Filtro com pessoaId`);
      params.set('pessoaId', filtro.pessoaId);
    }

    return this.http.get(`${this.doadorasUrl}`, { search: params })
     .toPromise()
     .then(response => {

       const responseJson = response.json();
       const doadoras = responseJson.content;

       console.log(doadoras);
       const resultado = {
         doadoras,
         total: responseJson.totalElements
       };

       return resultado;

      });
  }

  listarTodas(): Promise<any> {

    return this.http.get(`${this.doadorasUrl}`)
      .toPromise()
      .then(response => response.json().content);
  }

  excluir(id: number): Promise<void> {

    return this.http.delete(`${this.doadorasUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(doadora: Doadora): Promise<Doadora> {

    return this.http.post(`${this.doadorasUrl}`, JSON.stringify(doadora))
        .toPromise()
        .then(response => response.json());
  }


  atualizar(doadora: Doadora): Promise<Doadora> {

    return this.http.put(`${this.doadorasUrl}/${doadora.id}`, JSON.stringify(doadora))
    .toPromise()
    .then(response => response.json());

  }

  buscarPorId(id: number): Promise<Doadora> {

    return this.http.get(`${this.doadorasUrl}/${id}`)
      .toPromise()
      .then(response => {
        const doadora = response.json() as Doadora;

        this.converterStringsParaDatas([doadora]);

        return doadora;
      });
  }

  private converterStringsParaDatas(doadoras: Doadora[]) {
    for (const doadora of doadoras) {
      doadora.dataParto = moment(doadora.dataParto, 'YYYY-MM-DD').toDate();

      doadora.pessoa.dataNascimento = moment(doadora.pessoa.dataNascimento, 'YYYY-MM-DD').toDate();
    }
  }

}
