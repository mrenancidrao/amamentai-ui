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
import { ButtonModule } from 'primeng/components/button/button';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AgendamentosRoutingModule } from './agendamentos-routing.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AgendamentosRoutingModule,

    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
  ],
  declarations: [
    AgendamentoCadastroComponent,
    AgendamentosPesquisaComponent

  ],
  exports: []
})
export class AgendamentosModule { }
