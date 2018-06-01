import { Agendamento } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgendamentoService, AgendamentoFiltro, StatusAgendaFiltro } from '../agendamento.service';
import { LazyLoadEvent } from 'primeng/components/common/api';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { AuthService } from '../../seguranca/auth.service';
import { MotivoService } from '../../motivos/motivo.service';

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

  displayDialogCancel: boolean;

  dataAgendamentoTitle: string;

  nomeDoadoraTitle: string;

  objetivoTitle: string;

  agendaSelecionada = new Agendamento();

  motivoSelecionado: number;

  statusSelect = [
    {label:'TODOS', value:''},
    {label:'CANCELADO', value:'CANCELADO'},
    {label:'CONCLUÍDO', value:'CONCLUÍDO'},
    {label:'CONFIRMADO', value:'CONFIRMADO'},
    {label:'SOLICITADO', value:'SOLICITADO'}
  ];

  motivos = [];


  @ViewChild('tabela') tabela;

  constructor(
    private auth: AuthService,
    private agendamentoService: AgendamentoService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title,
    private confirmation: ConfirmationService,
    private motivoService: MotivoService
  ) {}

  ngOnInit() {
    this.title.setTitle('Amamentai - Meus Agendamentos');

    if (this.auth.jwtPayload.pessoaId) {
    
      console.log(`Entrou no jwtPayload`);

      this.filtro.pessoaId = this.auth.jwtPayload.pessoaId;
      
      this.pesquisar();

    }

    this.carregarMotivos();

  }

  showDialog() {
    this.displayDialog = true;
  }

  showDialogCancel() {
    this.displayDialogCancel = true;
  }

  onDialogHide() {
    console.log('chegouaqui');
    this.displayDialog = false;
    this.statusAgendamentos = null;
  }


  onDialogCancelHide() {
    this.displayDialogCancel = false;
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

  obterAgendaSelecionada(agenda: any) {
    this.agendaSelecionada = agenda;
    this.showDialogCancel();
  }

  cancelarAgendamento() {

    console.log(`Cancelando agendamento... de ${this.agendaSelecionada} motivo ${this.motivoSelecionado} passando pelo component após confirmação...`);
    this.agendamentoService.cancelarAgendamento(this.agendaSelecionada, this.motivoSelecionado)
    .then(() => {
      this.pesquisar();
      this.toasty.success('Agendamento cancelado com sucesso');
      this.onDialogCancelHide();
      this.motivoSelecionado = null;

    }).catch(erro => this.errorHandler.handle(erro));
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

carregarMotivos() {
  return this.motivoService.listarTodos()
    .then(motivos => {
      this.motivos = motivos.map(m => ({ label: m.nome, value: m.id }));
    })
    .catch(erro => this.errorHandler.handle(erro));
}


}
