import { Component } from '@angular/core';
import { NickService } from 'src/app/services/nick.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  constructor( private servicios: NickService){}

  id:string=""
  pass:string=""

  usuarios:any

   //LIMPIAR INPUTS
  limpiar(){
    this.id=""
    this.pass=""
  }

  ngOnInit(){
    this.servicios.getNick().subscribe( u =>{
      this.usuarios= u
    })

    localStorage.setItem("acceso", "F")
    
  }

  login( datos: any){
    //console.log(datos.value);
    for( let i=0; i < this.usuarios.length ; i++){

      let tempFormulario = JSON.stringify(datos.value)
      let tempNick = JSON.stringify(this.usuarios[i])
      
      //console.log(tempNick);
      
      if( tempFormulario ==tempNick){
        console.log("usuario encontrado");
        localStorage.setItem("acceso", "T")
        break;
      }
      
    }

  }

}
