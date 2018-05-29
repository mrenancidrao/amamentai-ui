import { RelatoriosModule } from './relatorios/relatorios.module';
import { CoreModule } from './core/core.module';
import { DoadorasModule } from './doadoras/doadoras.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { AgendamentosPesquisaComponent } from './agendamentos/agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamentos/agendamento-cadastro/agendamento-cadastro.component';
import { DoadorasPesquisaComponent } from './doadoras/doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadoras/doadora-cadastro/doadora-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { SegurancaModule } from './seguranca/seguranca.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MitosVerdadesComponent } from './mitos-verdades/mitos-verdades.component';
import { ComoRetiraLeiteComponent } from './como-retira-leite/como-retira-leite.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    MitosVerdadesComponent,
    ComoRetiraLeiteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,

    AgendamentosModule,
    DoadorasModule,
    SegurancaModule,
    RelatoriosModule,
    CoreModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
