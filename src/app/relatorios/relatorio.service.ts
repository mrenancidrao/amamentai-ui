import { ComoRetiraLeiteComponent } from './../como-retira-leite/como-retira-leite.component';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, ResponseContentType } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment.prod';

import { saveAs } from 'file-saver';


@Injectable()
export class RelatorioService {

  relatoriosUrl: string;

  constructor(private http: AuthHttp) {

    this.relatoriosUrl = `${environment.apiUrl}/relatorio`;

  }


  doadoras() {

    this.http.get(`${this.relatoriosUrl}/agenda`, {
      responseType: ResponseContentType.Blob
      }).subscribe(
        (response) => { // download file
            const blob = new Blob([response.blob()], {type: 'application/pdf'});
            const filename = 'doadoras.pdf';
            saveAs(blob, filename);
        });

  }
// tslint:disable-next-line:eofline
}
