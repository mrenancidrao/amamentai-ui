import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doadoras-pesquisa',
  templateUrl: './doadoras-pesquisa.component.html',
  styleUrls: ['./doadoras-pesquisa.component.css']
})
export class DoadorasPesquisaComponent {

  doadoras = [
    {
      nome: 'DOADORA 1', endereco: 'RUA DA DOADORA 1', bairro: 'BAIRRO DOADORA 1', usuario: 'doadora1@gmail.com', status: 'ATIVO'
    },
    {
      nome: 'DOADORA 2', endereco: 'RUA DA DOADORA 2', bairro: 'BAIRRO DOADORA 2', usuario: 'doadora2@gmail.com', status: 'ATIVO'
    },
    {
      nome: 'DOADORA 3', endereco: 'RUA DA DOADORA 3', bairro: 'BAIRRO DOADORA 3', usuario: 'doadora3@gmail.com', status: 'ATIVO'
    },
    {
      nome: 'DOADORA 4', endereco: 'RUA DA DOADORA 4', bairro: 'BAIRRO DOADORA 4', usuario: 'doadora4@gmail.com', status: 'ATIVO'
    }
  ];

}
