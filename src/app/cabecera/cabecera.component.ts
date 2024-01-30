import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent{
  
  constructor(public auth:LoginService){
    const sesion=getAuth();
    onAuthStateChanged(sesion, (user) => {
      if (user){
        this.auth.usuario=user;
      }
    })
  }

  cerrarSesion(){
    this.auth.cerrarSesion();
  }
}
