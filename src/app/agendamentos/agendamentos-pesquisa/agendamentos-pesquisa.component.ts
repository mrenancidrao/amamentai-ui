import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from '../agendamento.service';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent implements OnInit {

    doadora: string;
    agendamentos = []

    constructor(private agendamentoService: AgendamentoService) {}

    ngOnInit() {
        this.pesquisar();
    }

    pesquisar() {
        this.agendamentoService.pesquisar({ doadora:  this.doadora })
            .then(agendamentos => this.agendamentos = agendamentos);
    }

}
