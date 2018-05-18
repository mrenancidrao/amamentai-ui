import { CoreModule } from './../core/core.module';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
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
    CalendarModule,
    DropdownModule,
    DialogModule,
    DataListModule
  ],
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentosPesquisaComponent

  ],
  exports: []
})
export class AgendamentosModule { }
