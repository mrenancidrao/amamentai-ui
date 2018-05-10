import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BancoService {

  bancosUrl = 'http://localhost:8080/banco';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.bancosUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
