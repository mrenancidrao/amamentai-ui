import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export interface AgendamentoFiltro {
  doadora: string;
}

@Injectable()
export class AgendamentoService {

  agendamentosUrl = 'http://localhost:8080/vAgenda';
  
  constructor(private http: Http) { }

  pesquisar(filtro: AgendamentoFiltro): Promise<any> {
    const params = new URLSearchParams();
    const headers = new Headers();
    
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    if (filtro.doadora) {
      params.set('doadora', filtro.doadora);
    }

    return this.http.get(`${this.agendamentosUrl}`, { headers, search: params })
     .toPromise()
     .then(response => response.json().content)
  }

}
