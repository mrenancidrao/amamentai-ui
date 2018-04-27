import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {

  doadoras = [
    {
      label: 'DOADORA 1',
      value: {
        nome: 'DOADORA 1', endereco: 'RUA DA DOADORA 1', bairro: 'BAIRRO DOADORA 1', usuario: 'doadora1@gmail.com', status: 'ATIVO'
      }
    },
    {
      label: 'DOADORA 2',
      value: {
        nome: 'DOADORA 2', endereco: 'RUA DA DOADORA 2', bairro: 'BAIRRO DOADORA 2', usuario: 'doadora2@gmail.com', status: 'ATIVO'
      }
    },
    {
      label: 'DOADORA 3',
      value: {
        nome: 'DOADORA 3', endereco: 'RUA DA DOADORA 3', bairro: 'BAIRRO DOADORA 3', usuario: 'doadora3@gmail.com', status: 'ATIVO'
      }
    },
    {
      label: 'DOADORA 4',
      value: {
        nome: 'DOADORA 4', endereco: 'RUA DA DOADORA 4', bairro: 'BAIRRO DOADORA 4', usuario: 'doadora4@gmail.com', status: 'ATIVO'
      }
    }
  ];

  rotas = [
    {
      label: 'Segunda-Feira / Manhã',
      value: {
        dia: 'SEGUNDA-FEIRA', horario: 'MANHÃ'
      }
    },
    {
      label: 'Segunda-Feira / Tarde',
      value: {
        dia: 'SEGUNDA-FEIRA', horario: 'TARDE'
      }
    },
    {
      label: 'Terça-Feira / Manhã',
      value: {
        dia: 'TERÇA-FEIRA', horario: 'MANHÃ'
      }
    },
    {
      label: 'Terça-Feira / Tarde',
      value: {
        dia: 'TERÇA-FEIRA', horario: 'TARDE'
      }
    },
    {
      label: 'Quarta-Feira / Manhã',
      value: {
        dia: 'QUARTA-FEIRA', horario: 'MANHÃ'
      }
    },
    {
      label: 'Quarta-Feira / Tarde',
      value: {
        dia: 'QUARTA-FEIRA', horario: 'TARDE'
      }
    }
  ];

  objetivos = [
    {
      label: 'ENVIAR POTE', value: 'ENVIAR POTE'
    },
    {
      label: 'COLETAR POTE', value: 'COLETAR POTE'
    },
    {
      label: 'ENVIO E COLETA DE POTE', value: 'ENVIO E COLETA DE POTE'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
