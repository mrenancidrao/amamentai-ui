import { CoreModule } from './core/core.module';
import { DoadorasModule } from './doadoras/doadoras.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';



import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { AgendamentoService } from './agendamentos/agendamento.service';
import { HttpModule } from '@angular/http';
import { DoadoraService } from './doadoras/doadora.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,

    AgendamentosModule,
    DoadorasModule,
    CoreModule

  ],
  providers: [AgendamentoService, DoadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
