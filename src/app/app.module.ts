import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';



import { AppComponent } from './app.component';
import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DoadorasPesquisaComponent } from './doadoras-pesquisa/doadoras-pesquisa.component';


@NgModule({
  declarations: [
    AppComponent,
    AgendamentosPesquisaComponent,
    NavbarComponent,
    DoadorasPesquisaComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
