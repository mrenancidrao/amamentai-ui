import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent {

  agendamentos = [
    {
      data: '09/04/2018', doadora: 'DOADORA 1', objetivo: 'COLETA POTE', rota: 'SEGUNDA-FEIRA / MANHÃ', status: 'CONCLUÍDO'
    },
    {
      data: '10/04/2018', doadora: 'DOADORA 2', objetivo: 'ENVIO POTE', rota: 'TERÇA-FEIRA / MANHÃ', status: 'CANCELADO'
    },
    {
      data: '11/04/2018', doadora: 'DOADORA 3', objetivo: 'ENVIO E COLETA DE POTE', rota: 'QUARTA-FEIRA / TARDE', status: 'CONFIRMADO'
    },
    {
      data: '12/04/2018', doadora: 'DOADORA 4', objetivo: 'COLETA POTE', rota: 'QUINTA-FEIRA / TARDE', status: 'SOLICITADO'
    }
  ];

}
