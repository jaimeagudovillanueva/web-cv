import {Component} from '@angular/core';
import {TecnologiaComponent} from './tecnologia.component';

import { TecnologiaService } from './service/tecnologia.service';

import { Tecnologia } from './tecnologia';

@Component({
  selector: 'lista-tecnologias',
  templateUrl: './lista-tecnologias.component.html'
})
export class ListaTecnologiasComponent {

   tecnologias = []; 

   grupoSeleccionado = 'all';

   constructor(private tecnologiaService: TecnologiaService) {
       
       this.tecnologiaService.getData().subscribe(res => {
            this.tecnologias = res;
        }, err => console.log(err));
    }

    cambiaGrupo(grupo : string) {
        this.grupoSeleccionado = grupo;
    }
}