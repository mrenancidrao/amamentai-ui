import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { CoreModule } from './../core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    SharedModule,
    RouterModule,

    CoreModule,
    TabViewModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule,
  ],
  declarations: [
    RelatorioComponent
  ]
})

export class RelatoriosModule { }
