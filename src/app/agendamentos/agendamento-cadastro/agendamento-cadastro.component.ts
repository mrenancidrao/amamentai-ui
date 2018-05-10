import { RotaService } from './../../rotas/rota.service';
import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../../objetivos/objetivo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { DoadoraService } from '../../doadoras/doadora.service';
import { Agendamento } from '../../core/model';
import { AgendamentoService } from '../agendamento.service';
import { ToastyService } from 'ng2-toasty';
import { BancoService } from '../../bancos/banco.service';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {

  bancos = [];
  doadoras = [];
  rotas = [];
  objetivos = [];
  agendamento = new Agendamento();

  constructor(
    private bancoService: BancoService,
    private objetivoService: ObjetivoService,
    private doadoraService: DoadoraService,
    private rotaService: RotaService,
    private agendamentoService: AgendamentoService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarBancos();
    this.carregarDoadoras();
    this.carregarObjetivos();
    this.carregarRotas();
  }

  salvar(form) {
    console.log(JSON.stringify(this.agendamento));
    this.agendamentoService.adicionar(this.agendamento)
      .then(() => {
        this.toasty.success('Agendamento adicionado com sucesso!');
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
    return this.doadoraService.listarTodas()
      .then(doadoras => {
        this.doadoras = doadoras.map(d => ({ label: d.pessoa.nome + ' (' + d.nomeBebe + ')'
                                                  + ' - Data do parto: ' + d.dataParto
                                                  + ' - Bairro: ' + d.pessoa.endereco.bairro.nome
                                                  , value: d.id }));
      })
      .catch(erro => this.errorHandle.handle(erro));
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



}
