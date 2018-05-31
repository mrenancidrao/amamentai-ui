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

  dataString: string;

  constructor(private http: AuthHttp) {

    this.relatoriosUrl = `${environment.apiUrl}/relatorio`;

  }


  geraAgendaPDF(dataAgenda: Date) {

    this.dataString = this.converterDataParaString(dataAgenda);
    console.log(`Entrou no service relatorios ${this.dataString}`);

    this.http.get(`${this.relatoriosUrl}/agenda/${this.dataString}`, {
      responseType: ResponseContentType.Blob, search: dataAgenda
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
