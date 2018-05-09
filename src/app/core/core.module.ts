import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { DoadoraService } from '../doadoras/doadora.service';
import { ConfirmationService } from 'primeng/components/common/api';
import { AgendamentoService } from '../agendamentos/agendamento.service';

import { LOCALE_ID } from '@angular/core';
import { ObjetivoService } from '../objetivos/objetivo.service';

@NgModule({
  imports: [
    CommonModule,
    
    ToastyModule.forRoot(),
    ConfirmDialogModule

  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,

    ToastyModule,
    ConfirmDialogModule
  ],
  providers: [
    ErrorHandlerService,
    AgendamentoService, 
    DoadoraService, 
    ObjetivoService,

    ConfirmationService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
