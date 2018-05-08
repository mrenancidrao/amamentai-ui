import { LazyLoadEvent } from 'primeng/components/common/api';
import { DoadoraService, DoadoraFiltro } from './../doadora.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-doadoras-pesquisa',
  templateUrl: './doadoras-pesquisa.component.html',
  styleUrls: ['./doadoras-pesquisa.component.css']
})
export class DoadorasPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new DoadoraFiltro();
  doadoras = [];
  @ViewChild('tabela') tabela;

  constructor(private doadoraService: DoadoraService) {  }

  ngOnInit() {

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.doadoraService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.doadoras = resultado.doadoras;
      });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  excluir(doadora: any) {
      this.doadoraService.excluir(doadora.id)
      .then(() => {
        this.tabela.first = 0;
      });
  }

}
