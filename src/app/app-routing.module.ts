import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AgendamentosPesquisaComponent } from "./agendamentos/agendamentos-pesquisa/agendamentos-pesquisa.component";
import { AgendamentoCadastroComponent } from "./agendamentos/agendamento-cadastro/agendamento-cadastro.component";
import { DoadorasPesquisaComponent } from "./doadoras/doadoras-pesquisa/doadoras-pesquisa.component";
import { DoadoraCadastroComponent } from "./doadoras/doadora-cadastro/doadora-cadastro.component";
import { PaginaNaoEncontradaComponent } from "./core/pagina-nao-encontrada.component";
import { AgendamentosRoutingModule } from "./agendamentos/agendamentos-routing.module";


const routes: Routes = [
    { path: '', redirectTo: 'agenda', pathMatch: 'full' },
    { path: 'doadora', component: DoadorasPesquisaComponent },
    { path: 'doadora/novo', component: DoadoraCadastroComponent },
    { path: 'doadora/:id', component: DoadoraCadastroComponent },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent},
    { path: '**', redirectTo: 'pagina-nao-encontrada'}
  
  ];
  
  @NgModule({

    imports: [
      RouterModule.forRoot(routes),
      AgendamentosRoutingModule
    ],
    
    exports: [
        RouterModule
    ]
  })
  export class AppRoutingModule { }
  