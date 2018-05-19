import { AuthGuard } from './../seguranca/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AgendamentosPesquisaComponent } from './agendamentos-pesquisa/agendamentos-pesquisa.component';
import { AgendamentoCadastroComponent } from './agendamento-cadastro/agendamento-cadastro.component';
import { MeusAgendamentosComponent } from './meus-agendamentos/meus-agendamentos.component';


const routes: Routes = [
    {
      path: 'agenda',
      component: AgendamentosPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_AGENDA'] }
    },
    {
      path: 'meusAgendamentos',
      component: MeusAgendamentosComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_AGENDA'] }
    },
    {
      path: 'agenda/novo',
      component: AgendamentoCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_AGENDA'] }
    },
    {
      path: 'agenda/:id',
      component: AgendamentoCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_AGENDA'] }
    },
  ];

  @NgModule({

    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class AgendamentosRoutingModule { }
