import { Component } from '@angular/core';
import { ServicioSimpleService} from '../servicio-simple.service';

@Component({
  selector: 'app-envia-msj',
  templateUrl: './envia-msj.component.html',
  styleUrls: ['./envia-msj.component.css']
})

export class EnviaMsjComponent {

  variable="123456 enviado entre componentes";
  metodo_enviar(){
    this.msj_simple.cargo_msj(this.variable);

  }

    //Lo que ponemos en el constructor se ejecuta automaticamente sin necesidad de un evento
  constructor ( public msj_simple:ServicioSimpleService) {
    this.metodo_enviar();
    /* Podriamos haber echo asi:
      this.msj_simple.cargo_msj(this.variable);
    sin necesidad del metodo enviar */
    
  }

  
}
