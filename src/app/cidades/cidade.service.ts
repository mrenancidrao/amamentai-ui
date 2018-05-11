import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class CidadeService {

  cidadesUrl = 'http://localhost:8080/cidade';

  constructor(private http: Http) { }

  listarTodos(): Promise<any> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic ZW5mZXJtZWlyYWRhc2lsdmFAZ21haWwuY29tOmVuZmVybWVpcmE=');

    return this.http.get(`${this.cidadesUrl}`, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
