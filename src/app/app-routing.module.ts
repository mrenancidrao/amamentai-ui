import { DoadorasRoutingModule } from './doadoras/doadoras-routing.module';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgendamentosPesquisaComponent } from './agendamentos/agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamentos/agendamento-cadastro/agendamento-cadastro.component';
import { DoadorasPesquisaComponent } from './doadoras/doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadoras/doadora-cadastro/doadora-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';
import { AgendamentosRoutingModule } from './agendamentos/agendamentos-routing.module';
import { SegurancaRoutingModule } from './seguranca/seguranca-routing.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MitosVerdadesComponent } from './mitos-verdades/mitos-verdades.component';
import { ComoRetiraLeiteComponent } from './como-retira-leite/como-retira-leite.component';
import { RelatorioComponent } from './relatorios/relatorio/relatorio.component';


const routes: Routes = [
    { path: '', redirectTo: 'pagina-inicial', pathMatch: 'full' },
    { path: 'pagina-inicial', component: PaginaInicialComponent},
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
    { path: 'mitos-verdades', component: MitosVerdadesComponent},
    { path: 'como-retira-leite', component: ComoRetiraLeiteComponent},
    { path: 'nao-autorizado', component: NaoAutorizadoComponent},
    { path: 'relatorio', component: RelatorioComponent },
    { path: '**', redirectTo: 'pagina-nao-encontrada'}
  ];
  @NgModule({

    imports: [
      RouterModule.forRoot(routes),
      AgendamentosRoutingModule,
      DoadorasRoutingModule,
      SegurancaRoutingModule
    ],

    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
