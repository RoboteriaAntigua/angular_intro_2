import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  //Para formularios reactivos los campos del formulario deben ser
  //instancias de la clase FormControl
  email = new FormControl('');
  clave = new FormControl('');
  nombre = new FormControl('');

}
