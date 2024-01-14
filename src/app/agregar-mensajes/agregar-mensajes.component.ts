import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';


@Component({
  selector: 'app-agregar-mensajes',
  templateUrl: './agregar-mensajes.component.html',
  styleUrls: ['./agregar-mensajes.component.css']
})
export class AgregarMensajesComponent {

  entrada:string="";


  constructor(public Mensajes_servicio:MensajeService) {}

  //Llamo al servicio Mensajes_servicio y a su metodo add
  //y le agrego el valor de la entrada del input
  metodo1(){
  this.Mensajes_servicio.add(this.entrada);
}

}
