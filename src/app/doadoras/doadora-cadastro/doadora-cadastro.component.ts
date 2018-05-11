import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { BairroService } from '../../bairros/bairro.service';
import { DoadoraService } from '../doadora.service';
import { CidadeService } from '../../cidades/cidade.service';
import { Doadora, Pessoa } from '../../core/model';

@Component({
  selector: 'app-doadora-cadastro',
  templateUrl: './doadora-cadastro.component.html',
  styleUrls: ['./doadora-cadastro.component.css']
})
export class DoadoraCadastroComponent implements OnInit {

  doadora = new Doadora();

  pessoa = new Pessoa();

  cidades = [];

  bairros = [];

  constructor(
    private doadoraService: DoadoraService,
    private bairroService: BairroService,
    private cidadeService: CidadeService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregarBairros();
    this.carregarCidades();
  }

  salvar(form) {
    console.log(JSON.stringify(this.doadora));
    this.doadoraService.adicionar(this.doadora)
      .then(() => {
        this.toasty.success('Doadora cadastrada com sucesso!');

        form.reset();
        this.doadora = new Doadora();

      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  carregarBairros() {
    return this.bairroService.listarTodos()
    .then(bairros => {
      this.bairros = bairros.map(b => ({ label: b.nome, value: b.id }));
    })
    .catch(erro => this.errorHandle.handle(erro));
  }

  carregarCidades() {
    return this.cidadeService.listarTodos()
    .then(cidades => {
      this.cidades = cidades.map(c => ({ label: c.nome + "-" + c.estado.sigla, value: c.id }));
    })
    .catch(erro => this.errorHandle.handle(erro));
  }

}
