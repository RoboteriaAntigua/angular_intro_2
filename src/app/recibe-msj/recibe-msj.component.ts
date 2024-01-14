import { Component } from '@angular/core';
import { ServicioSimpleService} from '../servicio-simple.service';

@Component({
  selector: 'app-recibe-msj',
  templateUrl: './recibe-msj.component.html',
  styleUrls: ['./recibe-msj.component.css']
})
export class RecibeMsjComponent {
  constructor ( public msj_simple:ServicioSimpleService) {}
  
}
