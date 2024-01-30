import { Component, EventEmitter, OnInit } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './monedas.component.html',
  styleUrl: './monedas.component.css'
})
export class MonedasComponent implements OnInit {
  busqueda="";
  miTimeout:any;

  constructor (public ajax: PeticionesAJAXService, public firestore: FirestoreService, public auth: LoginService){
  }

  ngOnInit(){
    this.ajax.peticionAJAX();
    this.firestore.obtenerDatos(this.auth.usuario.uid);
  }

  buscar(){
    if(this.miTimeout){
      clearTimeout(this.miTimeout);
    }

    if (this.busqueda.length >= 3){
      this.miTimeout=setTimeout(()=>{
        
        this.miTimeout=null;
        this.ajax.peticionAJAX(this.busqueda);
      }, 500)
    } else if (this.busqueda==''){
        this.miTimeout=setTimeout(()=>{
          
          this.miTimeout=null;
          this.ajax.peticionAJAX();
        }, 500)
    }
  }

  seguir(id:string){
    this.firestore.seguirCrypto(this.auth.usuario.uid, id);
  }

  comprobarMoneda(idMoneda: any): boolean {
    return !this.firestore.datos.map(item => item.idMoneda).includes(idMoneda);
  }
}
