import { Component, OnInit } from '@angular/core';
import { ObjetivoService } from '../../objetivos/objetivo.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { errorHandler } from '@angular/platform-browser/src/browser';

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
    private errorHandle: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarObjetivos();
  }

  carregarObjetivos() {
    return this.objetivoService.listarTodos()
      .then(objetivos => {
        this.objetivos = objetivos.map(o => ({ label: o.nome, value: o.id }));
      });
      //.catch(erro => this.errorHandle.handle(erro));
  }

}
