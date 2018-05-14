
import { Http } from '@angular/http';
import { Headers, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { Doadora } from '../core/model';

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

  adicionar(doadora: Doadora): Promise<Doadora> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');
    headers.append('Content-Type', 'application/json');

    return this.http.post(`${this.DoadorasUrl}`, JSON.stringify(doadora), { headers })
        .toPromise()
        .then(response => response.json());
  }


  atualizar(doadora: Doadora): Promise<Doadora> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');
    headers.append('Content-Type', 'application/json');

    return this.http.put(`${this.DoadorasUrl}/${doadora.id}`, JSON.stringify(doadora), { headers })
    .toPromise()
    .then(response => response.json());

  }

  buscarPorId(id: number): Promise<Doadora> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.DoadorasUrl}/${id}`, { headers })
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
