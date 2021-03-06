import { Usuario } from './../../core/model';
import { AuthService } from './../../seguranca/auth.service';
import { RotaService } from './../../rotas/rota.service';
import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../../objetivos/objetivo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { DoadoraService, DoadoraFiltro } from '../../doadoras/doadora.service';
import { Agendamento } from '../../core/model';
import { AgendamentoService } from '../agendamento.service';
import { ToastyService } from 'ng2-toasty';
import { BancoService } from '../../bancos/banco.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {

  doadoraFiltro = new DoadoraFiltro();
  bancos = [];
  doadoras = [];
  rotas = [];
  objetivos = [];
  agendamento = new Agendamento();

  constructor(
    public auth: AuthService,
    private bancoService: BancoService,
    private objetivoService: ObjetivoService,
    private doadoraService: DoadoraService,
    private rotaService: RotaService,
    private agendamentoService: AgendamentoService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService,
    private route: ActivatedRoute,
    private title: Title

  ) { }

  ngOnInit() {

  //  console.log(this.route.snapshot.params['id'] === null);

    this.title.setTitle('Amamentai - Novo Agendamento');

    const idAgenda = this.route.snapshot.params['id'];

    if (idAgenda) {
      this.carregarAgendamento(idAgenda);
    }

    this.carregarBancos();
    this.carregarDoadoras();
    this.carregarObjetivos();
    this.carregarRotas();
  }

  carregarAgendamento(id: number) {
    this.agendamentoService.buscarPorId(id)
      .then(agendamento => {
        this.agendamento = agendamento;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandle.handle(erro));

  //    console.log(this.doadora);
  }

  salvar(form) {
    console.log(JSON.stringify(this.agendamento));
    this.agendamentoService.adicionar(this.agendamento)
      .then(() => {
        this.toasty.success('Agendamento adicionado com sucesso!');

        form.reset();
        this.agendamento = new Agendamento();

      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  carregarBancos() {
    return this.bancoService.listarTodos()
      .then(bancos => {
        this.bancos = bancos.map(b => ({ label: b.nome, value: b.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  carregarDoadoras() {

    if (this.auth.jwtPayload.tipoUserId.id === 1) {

      console.log(`${this.auth.jwtPayload.tipoUserId.id}  É doadora pessoa: ${this.auth.jwtPayload.pessoaId}`);

      this.doadoraFiltro.pessoaId = this.auth.jwtPayload.pessoaId;

      return this.doadoraService.pesquisar(this.doadoraFiltro)
      .then(retorno => {
        this.doadoras = retorno.doadoras.map(d => ({ label: d.pessoa.nome + ' (' + d.nomeBebe + ')'
                                                  + ' - Data do parto: ' + d.dataParto
                                                  + ' - Bairro: ' + d.pessoa.endereco.bairro.nome
                                                  , value: d.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));

    } else {

    console.log(`${this.auth.jwtPayload.tipoUserId.id} É enfermeira pessoa: ${this.auth.jwtPayload.pessoaId}`);

    return this.doadoraService.listarTodas()
      .then(doadoras => {
        this.doadoras = doadoras.map(d => ({ label: d.pessoa.nome + ' (' + d.nomeBebe + ')'
                                                  + ' - Data do parto: ' + d.dataParto
                                                  + ' - Bairro: ' + d.pessoa.endereco.bairro.nome
                                                  , value: d.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));
    }
  }
  carregarObjetivos() {
    return this.objetivoService.listarTodos()
      .then(objetivos => {
        this.objetivos = objetivos.map(o => ({ label: o.nome, value: o.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  carregarRotas() {
    return this.rotaService.listarTodos()
      .then(rotas => {
        this.rotas = rotas.map(r => ({ label: r.diaSemana.nome + ' - ' + r.horario.nome, value: r.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Amamentai - Agendamento ${this.agendamento.doadora.pessoa.nome}`);
  }

}
