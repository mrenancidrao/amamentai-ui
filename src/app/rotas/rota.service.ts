import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RotaService {

  rotasUrl = 'http://localhost:8080/rota';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.rotasUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
