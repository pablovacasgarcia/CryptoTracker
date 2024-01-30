import { Component, OnInit } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { FirestoreService } from '../firestore.service';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  constructor(public ajax: PeticionesAJAXService, public firestore: FirestoreService, public auth: LoginService){

  }

  ngOnInit(): void {
    if (this.auth.usuario){      
      this.firestore.obtenerMonedas(this.auth.usuario.uid);
    }
  }

  dejarSeguir(id:string){
    this.firestore.seguirCrypto(this.auth.usuario.uid, id, true);
  }

}
