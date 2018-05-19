import { Agendamento } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendamentoService, AgendamentoFiltro, StatusAgendaFiltro } from '../agendamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.css']
})
export class MeusAgendamentosComponent implements OnInit {


  totalRegistros = 0;

  filtro = new AgendamentoFiltro();

  filtroStatusAgenda = new StatusAgendaFiltro();

  agendamentos = [];

  statusAgendamentos = [];

  displayDialog: boolean;

  dataAgendamentoTitle: string;

  nomeDoadoraTitle: string;

  objetivoTitle: string;



  @ViewChild('tabela') tabela;

  constructor(
    private auth: AuthService,
    private agendamentoService: AgendamentoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title,
    private confirmation: ConfirmationService
  ) {}

  ngOnInit() {
    this.title.setTitle('Amamentai - Meus Agendamentos');

    if (this.auth.jwtPayload.pessoaId) {
    
      console.log(`Entrou no jwtPayload`);

      this.filtro.pessoaId = this.auth.jwtPayload.pessoaId;
      
      this.pesquisar();

    }

  }

  showDialog() {
    this.displayDialog = true;
  }

  onDialogHide() {
    console.log('chegouaqui');
    this.displayDialog = false;
    this.statusAgendamentos = null;
  }

  pesquisar(pagina = 0) {
      this.filtro.pagina = pagina;

      console.log(this.filtro);

      this.agendamentoService.pesquisar(this.filtro)
          .then(resultado => {
            this.totalRegistros = resultado.total;
            this.agendamentos = resultado.agendamentos;
          })
          .catch(erro => this.errorHandler.handle(erro));
  }

  pesquisarStatusAgenda(agenda: any) {

    this.dataAgendamentoTitle = this.agendamentoService.converterFormatoDeData(agenda.dataAgenda);

    this.nomeDoadoraTitle = agenda.doadoraNome;

    this.objetivoTitle = agenda.objetivo;

  console.log(`Recebendo paramentro de agenda id: ${agenda.id}`);

  if (agenda.id != null) {
    this.filtroStatusAgenda.agendaId = agenda.id;
  }
    this.agendamentoService.pesquisarStatusAgenda(this.filtroStatusAgenda)
        .then(resultado => {
          console.log(resultado);
          this.totalRegistros = resultado.total;
          this.statusAgendamentos = resultado.statusAgendamentos;
          this.showDialog();
        })
        .catch(erro => this.errorHandler.handle(erro));
}

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  dataPassou(dataAgenda: string): boolean {
    const dateAgenda = this.agendamentoService.converterStringParaData(dataAgenda);
    const dataHoje = new Date();

    if (dataHoje > dateAgenda ) {
      return true;
    } else {
      return false;
    }
  }

  confirmarAgendamento(agenda: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja confirmar?',
      accept: () => {
        this.confirmar(agenda);
        console.log(`Confirmando agendamento... de ${agenda.doadoraNome} passando pelo component....`);
      }
    });
  }

  confirmar(agenda: any) {
    console.log(`Confirmando agendamento... de ${agenda.doadoraNome} passando pelo component após confirmação...`);
    this.agendamentoService.confirmarAgendamento(agenda)
    .then(() => {
      // if (this.tabela.first === 0) {
        this.pesquisar();
      // } else {
      //  this.tabela.first = 0;
      // }

      this.toasty.success('Agendamento confirmado com sucesso');

    }).catch(erro => this.errorHandler.handle(erro));
}


}
