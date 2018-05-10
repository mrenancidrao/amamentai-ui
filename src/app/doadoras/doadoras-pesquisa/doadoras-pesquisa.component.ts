import { LazyLoadEvent } from 'primeng/components/common/api';
import { DoadoraService, DoadoraFiltro } from './../doadora.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ConfirmationService } from 'primeng/components/common/api';
import { ErrorHandlerService } from '../../core/error-handler.service';

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

  constructor(private doadoraService: DoadoraService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService) {  }

  ngOnInit() {

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.doadoraService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.doadoras = resultado.doadoras;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(doadora: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(doadora);
      }
    });

  }

  excluir(doadora: any) {
      this.doadoraService.excluir(doadora.id)
      .then(() => {
        if (this.tabela.first === 0) {
          this.pesquisar();
        } else {
          this.tabela.first = 0;
        }

        this.toasty.success('Doadora excluída com sucesso');

      }).catch(erro => this.errorHandler.handle(erro));
  }
}
