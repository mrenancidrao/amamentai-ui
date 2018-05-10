import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../../objetivos/objetivo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { DoadoraService } from '../../doadoras/doadora.service';

@Component({
  selector: 'app-agendamento-cadastro',
  templateUrl: './agendamento-cadastro.component.html',
  styleUrls: ['./agendamento-cadastro.component.css']
})
export class AgendamentoCadastroComponent implements OnInit {

  doadoras = [];
  rotas = [];
  objetivos = [];

  constructor(
    private objetivoService: ObjetivoService,
    private doadoraService: DoadoraService,
    private errorHandle: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarDoadoras();
    this.carregarObjetivos();
  }

  salvar() {

  }
  
  carregarDoadoras() {
    return this.doadoraService.listarTodas()
      .then(doadoras => {
        this.doadoras = doadoras.map(d => ({ label: d.pessoa.nome + " - Bairro: " + d.pessoa.endereco.bairro.nome, value: d.id }));
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


}
