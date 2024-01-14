import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioSimpleService {

  constructor() { }

  msj:string="";

  cargo_msj(par:string){
    this.msj=par;
  }
}
