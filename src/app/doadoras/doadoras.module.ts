import { SharedModule } from './../shared/shared.module';

import { DoadorasPesquisaComponent } from './doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadora-cadastro/doadora-cadastro.component';
import { DoadorasGridComponent } from './doadoras-grid/doadoras-grid.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/components/tabview/tabview';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,

    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
  ],
  declarations: [
    DoadorasGridComponent,
    DoadoraCadastroComponent,
    DoadorasPesquisaComponent
  ],

  exports: [
    DoadoraCadastroComponent,
    DoadorasPesquisaComponent
  ]

})
export class DoadorasModule { }
