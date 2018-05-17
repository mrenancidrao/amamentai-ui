import { Agendamento } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { AgendamentoService, AgendamentoFiltro } from '../agendamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';

@Component({
  selector: 'app-agendamentos-pesquisa',
  templateUrl: './agendamentos-pesquisa.component.html',
  styleUrls: ['./agendamentos-pesquisa.component.css']
})
export class AgendamentosPesquisaComponent implements OnInit {

    totalRegistros = 0;
    filtro = new AgendamentoFiltro();
    agendamentos = [];
    display: boolean;

    constructor(
      private agendamentoService: AgendamentoService,
      private title: Title
    ) {}

    ngOnInit() {
      this.title.setTitle('Amamentai - Pesquisa de Agendamentos');
    }

    showDialog() {
      this.display = true;
  }

    pesquisar(pagina = 0) {
        this.filtro.pagina = pagina;

        this.agendamentoService.pesquisar(this.filtro)
            .then(resultado => {
              this.totalRegistros = resultado.total;
              this.agendamentos = resultado.agendamentos;
            });
    }

    aoMudarPagina(event: LazyLoadEvent) {
      const pagina = event.first / event.rows;
      this.pesquisar(pagina);
    }

    dataPassou(dataAgenda: string): boolean {
      const dateAgenda = this.agendamentoService.converterStringParaData(dataAgenda);
      const dataHoje = new Date();
      console.log(`Data agendamento é: ${dateAgenda} e hoje é: ${dataHoje}`);

      if (dataHoje > dateAgenda ) {
        console.log('passou');
        return true;
      } else {
        console.log('nao passou');
        return false;
      }
    }


}
