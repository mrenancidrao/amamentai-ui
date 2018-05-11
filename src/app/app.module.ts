import { CoreModule } from './core/core.module';
import { DoadorasModule } from './doadoras/doadoras.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { AgendamentosPesquisaComponent } from './agendamentos/agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamentos/agendamento-cadastro/agendamento-cadastro.component';
import { DoadorasPesquisaComponent } from './doadoras/doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadoras/doadora-cadastro/doadora-cadastro.component';

const routes: Routes = [
  { path: 'agenda', component: AgendamentosPesquisaComponent },
  { path: 'agenda/novo', component: AgendamentoCadastroComponent },
  { path: 'doadora', component: DoadorasPesquisaComponent },
  { path: 'doadora/novo', component: DoadoraCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),

    AgendamentosModule,
    DoadorasModule,
    CoreModule

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
