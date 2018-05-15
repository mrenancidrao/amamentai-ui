import { SharedModule } from './../shared/shared.module';

import { DoadorasPesquisaComponent } from './doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadora-cadastro/doadora-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,

    TabViewModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
  ],
  declarations: [
    DoadoraCadastroComponent,
    DoadorasPesquisaComponent
  ],

  exports: [
  ]

})
export class DoadorasModule { }
