import { AuthGuard } from './../seguranca/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DoadorasPesquisaComponent } from './doadoras-pesquisa/doadoras-pesquisa.component';
import { DoadoraCadastroComponent } from './doadora-cadastro/doadora-cadastro.component';


const routes: Routes = [
    {
      path: 'doadora',
      component: DoadorasPesquisaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_PESQUISAR_DOADORA'] }
    },
    {
      path: 'doadora/novo',
      component: DoadoraCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_DOADORA'] }
    },
    {
      path: 'doadora/:id',
      component: DoadoraCadastroComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ROLE_CADASTRAR_DOADORA'] }
    },
  ];

  @NgModule({

    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class DoadorasRoutingModule { }
