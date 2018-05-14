import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AgendamentosPesquisaComponent } from "./agendamentos-pesquisa/agendamentos-pesquisa.component";
import { AgendamentoCadastroComponent } from "./agendamento-cadastro/agendamento-cadastro.component";


const routes: Routes = [
    { path: 'agenda', component: AgendamentosPesquisaComponent },
    { path: 'agenda/novo', component: AgendamentoCadastroComponent },
    { path: 'agenda/:id', component: AgendamentoCadastroComponent },
  ];
  
  @NgModule({

    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class AgendamentosRoutingModule { }
  