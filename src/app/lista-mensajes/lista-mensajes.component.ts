import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css']
})
export class ListaMensajesComponent {
 
  constructor(public Mensajes_servicio:MensajeService) {}
  
}
