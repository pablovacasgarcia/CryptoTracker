import { Component, EventEmitter, Output } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-monedas',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './monedas.component.html',
  styleUrl: './monedas.component.css'
})
export class MonedasComponent {
  constructor (public ajax: PeticionesAJAXService){
    this.ajax.peticionAJAX();
  }
  
}
