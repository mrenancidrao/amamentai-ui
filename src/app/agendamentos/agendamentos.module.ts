import { CoreModule } from './../core/core.module';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { DataListModule } from 'primeng/datalist';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AgendamentosRoutingModule,

    CoreModule,
    TabViewModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    DropdownModule,
    DialogModule,
    DataListModule
  ],
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentosPesquisaComponent,
    MeusAgendamentosComponent

  ],
  exports: []
})
export class AgendamentosModule { }
