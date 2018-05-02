import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doadoras-grid',
  templateUrl: './doadoras-grid.component.html',
  styleUrls: ['./doadoras-grid.component.css']
})
export class DoadorasGridComponent {

  @Input() doadoras = [];

}
