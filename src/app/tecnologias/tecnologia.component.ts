import {Component, Input} from '@angular/core';

import { Tecnologia } from './tecnologia';

@Component({
  selector: 'tecnologia',
  templateUrl: './tecnologia.component.html'
})
export class TecnologiaComponent {

  @Input()
  datos: Tecnologia;
}