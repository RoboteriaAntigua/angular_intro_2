import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioValidadoComponent } from './formulario-validado/formulario-validado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { ChildrenComponent } from './children/children.component';
import { AgregarMensajesComponent } from './agregar-mensajes/agregar-mensajes.component';
import { ListaMensajesComponent } from './lista-mensajes/lista-mensajes.component';
import { EnviaMsjComponent } from './envia-msj/envia-msj.component';
import { RecibeMsjComponent } from './recibe-msj/recibe-msj.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioValidadoComponent,
    FormularioReactivoComponent,
    ChildrenComponent,
    AgregarMensajesComponent,
    ListaMensajesComponent,
    EnviaMsjComponent,
    RecibeMsjComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
