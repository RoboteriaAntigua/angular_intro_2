import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor() { }

  //Defino un array de strings
  mensajes: string[] = [];

  //Defino un metodo para guardar en el array
  add(par:string){
    this.mensajes.push(par);
  }
  
}
