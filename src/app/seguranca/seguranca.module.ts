import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { SegurancaRoutingModule } from './seguranca-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    CoreModule,
    InputTextModule,
    ButtonModule,

    SegurancaRoutingModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
