import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class BairroService {

  bairrosUrl = 'http://localhost:8080/bairro';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.bairrosUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
