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

    constructor(private agendamentoService: AgendamentoService) {}

    ngOnInit() {

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


}
