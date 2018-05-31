import { RelatorioService } from './../relatorio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  dataAgenda: Date;

  constructor(
    private relatorioService: RelatorioService
  ) { }

  ngOnInit() {
  }

  geraRelatorioAgenda() {
    console.log(`Entrou no gera relatorios ${this.dataAgenda}`);
    this.relatorioService.geraAgendaPDF(this.dataAgenda);
  }

}
