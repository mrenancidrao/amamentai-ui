import { RelatorioService } from './../relatorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  constructor(
    private relatorioService: RelatorioService
  ) { }

  ngOnInit() {
  }

  geraRelatorioDoadoras() {
    console.log('Entrou no gera relatorios');
    this.relatorioService.doadoras();
  }

}
