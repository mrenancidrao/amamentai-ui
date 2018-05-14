import { BancoService } from './../bancos/banco.service';
import { RotaService } from './../rotas/rota.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';


import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { DoadoraService } from '../doadoras/doadora.service';
import { ConfirmationService } from 'primeng/components/common/api';
import { AgendamentoService } from '../agendamentos/agendamento.service';


import { ObjetivoService } from '../objetivos/objetivo.service';
import { BairroService } from '../bairros/bairro.service';
import { CidadeService } from '../cidades/cidade.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';


@NgModule({
  imports: [
    CommonModule,

    ToastyModule.forRoot(),
    ConfirmDialogModule,
    RouterModule,

    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent
  ],
  exports: [
    NavbarComponent,

    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    AgendamentoService,
    BancoService,
    DoadoraService,
    ObjetivoService,
    RotaService,
    BairroService,
    CidadeService,

    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
