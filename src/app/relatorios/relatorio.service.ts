import { ComoRetiraLeiteComponent } from './../como-retira-leite/como-retira-leite.component';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers, ResponseContentType } from '@angular/http';

import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment.prod';

import { saveAs } from 'file-saver';


@Injectable()
export class RelatorioService {

  relatoriosUrl: string;

  dataAgenda: string;

  constructor(private http: AuthHttp) {

    this.relatoriosUrl = `${environment.apiUrl}/relatorio`;

  }


  geraAgendaPDF(dataAgenda: Date) {

    this.dataAgenda = this.converterDataParaString(dataAgenda);
    console.log(`Entrou no service relatorios ${this.dataAgenda}`);

    this.http.post(`${this.relatoriosUrl}/agenda`, this.dataAgenda, {
      responseType: ResponseContentType.Blob
      }).subscribe(
        (response) => { // download file
            const blob = new Blob([response.blob()], {type: 'application/pdf'});
            const filename = 'agenda.pdf';
            saveAs(blob, filename);
        });

  }
// tslint:disable-next-line:eofline


converterDataParaString(data: any) {
  return moment(data).format('YYYY-MM-DD');
}
}
