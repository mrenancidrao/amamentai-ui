import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AgendamentoService {

  agendamentoUrl = 'http://localhost:8080/agenda';

  constructor(private http: Http) { }

  pesquisar(): Promise<any> {
    return this.http.get(`${this.agendamentoUrl}`)
      .toPromise()
      .then(response => {
        console.log(response.json());
      });
  }

}
