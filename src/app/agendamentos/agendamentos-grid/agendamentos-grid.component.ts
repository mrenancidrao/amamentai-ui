import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-agendamentos-grid',
  templateUrl: './agendamentos-grid.component.html',
  styleUrls: ['./agendamentos-grid.component.css']
})
export class AgendamentosGridComponent {

  @Input() agendamentos = [];

}
