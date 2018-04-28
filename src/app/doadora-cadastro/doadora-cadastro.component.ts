import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doadora-cadastro',
  templateUrl: './doadora-cadastro.component.html',
  styleUrls: ['./doadora-cadastro.component.css']
})
export class DoadoraCadastroComponent implements OnInit {

  cidades = [
    {
      label: 'Boa Viagem-CE', value: 'Boa Viagem-CE'
    },
    {
      label: 'Fortaleza-CE', value: 'Fortaleza-CE'
    },
    {
      label: 'Rio de Janeiro-RJ', value: 'Rio de Janeiro-RJ'
    },
    {
      label: 'São Paulo-SP', value: 'São Paulo-SP'
    },
  ]

  bairros = [
    {
      label: 'Benfica', value: 'Benfica'
    },
    {
      label: 'Farias Brito', value: 'Farias Brito'
    },
    {
      label: 'Fátima', value: 'Fátima'
    },
    {
      label: 'Otávio Bonfim', value: 'Otávio Bonfim'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
