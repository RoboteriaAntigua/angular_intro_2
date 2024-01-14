import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.css']
})
export class FormularioValidadoComponent {
  //defino un objeto js
  registro = {
    email:"",
    clave:""
  };

  alerta_mail:boolean=false;
  alerta_clave:boolean=false;

  entradita:string='';
  //Funcion que dispara el evento (ngSubmit) del formulario
  procesar(){
    //aqui proceso la info del formulario

  }


}
