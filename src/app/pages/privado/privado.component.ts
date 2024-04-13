import { Component } from '@angular/core';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent {
  nick:string=""
  pass:string=""

  guardarJSON(){
    const temp={
      id: this.nick,
      pass: this.pass
    }
    this.limpiar()
    
    return temp;
  }

  //LIMPIAR INPUTS
  limpiar(){
    this.nick=""
    this.pass=""
  }

  
  logout(){

  }
}
