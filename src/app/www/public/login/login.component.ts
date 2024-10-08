import { Component } from '@angular/core';
import { Login } from '../../../interfaces/login.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(
    private router:Router
  ){}

  acceso:Login = {
    usuario : "",
    clave   : ""
  }

  validarAcceso(event: Event) : void {
    event.preventDefault();
    const errores:string[] = []; //Creo un arreglo para capturar errores
    const datos = {
      usuario : "admin",
      clave   : "12345"
    }
    if(this.acceso.usuario.length == 0){
      //Añado el mensaje de error
      errores.push("Ingrese un nombre de usuario")
    }
    if(this.acceso.clave.length == 0){
      //Añado el mensaje de error
      errores.push("Ingrese la clave de acceso");
    }
    if(this.acceso.usuario !== datos.usuario 
      && this.acceso.clave !== datos.clave){
        errores.push("Los nombres de usuario / clave no coinciden");
    }
    if(errores.length > 0){
      alert("Corrija los siguientes errores:\n"+errores.map(e => e+".").join('\n'));
      return
    }
    this.router.navigate(["/dashboard"]);
  }
}
