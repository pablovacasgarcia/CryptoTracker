import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  constructor(public auth:LoginService){

  }

  registrarse=false;
  displayName="";
  email="";
  password="";
  password2="";

  registro() {
    this.auth.registro(this.password, this.password2, this.email, this.displayName);
  }


  iniciarSesion() {
    this.auth.iniciarSesion(this.email, this.password);
  }

  iniciarSesionGoogle(){
    this.auth.iniciarSesionGoogle();
  }


}
