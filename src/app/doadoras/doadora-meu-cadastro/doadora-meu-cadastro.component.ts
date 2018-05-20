import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { BairroService } from '../../bairros/bairro.service';
import { DoadoraService, DoadoraFiltro } from '../doadora.service';
import { CidadeService } from '../../cidades/cidade.service';
import { Doadora, Pessoa } from '../../core/model';
import { ActivatedRoute } from '@angular/router';
import { isUndefined } from 'util';
import { FormControl } from '@angular/forms/src/model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-doadora-meu-cadastro',
  templateUrl: './doadora-meu-cadastro.component.html',
  styleUrls: ['./doadora-meu-cadastro.component.css']
})
export class DoadoraMeuCadastroComponent implements OnInit {

  doadora = new Doadora();

  pessoa = new Pessoa();

  doadoraFiltro = new DoadoraFiltro();

  cidades = [];

  bairros = [];

  constructor(
    private doadoraService: DoadoraService,
    private bairroService: BairroService,
    private cidadeService: CidadeService,
    private toasty: ToastyService,
    private errorHandle: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.title.setTitle(`Amamentai - ${this.auth.jwtPayload.nome}`);
    //const idDoadora = this.route.snapshot.params['id'];

    if (this.auth.jwtPayload.pessoaId) {
      console.log(`Pessoa logada: ${this.auth.jwtPayload.pessoaId}`);
      
      this.doadoraFiltro.pessoaId = this.auth.jwtPayload.pessoaId;
      
      this.doadoraService.pesquisar(this.doadoraFiltro)
      .then(doadora => {
        console.log(doadora);
        this.carregarDoadora(doadora.doadoras[0].id);
      })
      .catch(erro => this.errorHandle.handle(erro));

      //this.carregarDoadora();
    }

    //this.carregarBairros();
    //this.carregarCidades();
  }

  get editando() {
  //  console.log(this.doadora.id);
    return Boolean(this.doadora.id);
  }

  carregarDoadora(id: number) {
    this.doadoraService.buscarPorId(id)
      .then(doadora => {
        this.doadora = doadora;
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandle.handle(erro));

  //    console.log(this.doadora);
  }

  salvar(form: FormControl) {
  //  console.log(this.editando)
    if (this.editando) {
      this.atualizar(form);
    } else {
      this.adicionar(form);
    }
  }

  adicionar(form: FormControl) {
  //  console.log(`Adicionando ` + JSON.stringify(this.doadora));
    this.doadoraService.adicionar(this.doadora)
      .then(doadoraAdicionada => {
        this.toasty.success('Doadora cadastrada com sucesso!');

        this.router.navigate(['/meuCadastro', doadoraAdicionada.id]);

      })
      .catch(erro => this.errorHandle.handle(erro));
  }

  atualizar(form: FormControl) {
  //  console.log(this.doadora);
    this.doadoraService.atualizar(this.doadora)
    .then(doadora => {
      this.doadora = doadora;

      this.atualizarTituloEdicao();
      this.toasty.success('Doadora alterada com sucesso!');

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

  novo(form: FormControl) {
    // form.reset();
    // this.doadora = new Doadora();
    this.router.navigate(['/doadora/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Amamentai - Doadora ${this.doadora.pessoa.nome}`);
  }

}
