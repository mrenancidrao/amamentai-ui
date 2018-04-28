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
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoadorasPesquisaComponent } from './doadoras-pesquisa/doadoras-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { DoadoraCadastroComponent } from './doadora-cadastro/doadora-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendamentosPesquisaComponent,
    NavbarComponent,
    DoadorasPesquisaComponent,
    AgendamentoCadastroComponent,
    DoadoraCadastroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
