import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListaTecnologiasComponent } from './tecnologias/lista-tecnologias.component';
import { TecnologiaComponent } from './tecnologias/tecnologia.component';

import { TecnologiaService } from './tecnologias/service/tecnologia.service';

import { GrupoPipe } from './tecnologias/pipe/grupo-pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaTecnologiasComponent,
    TecnologiaComponent,
    GrupoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TecnologiaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }