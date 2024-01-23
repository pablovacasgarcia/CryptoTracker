import { Component, Input, InputDecorator, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() id:string = "";

  constructor (public ajax: PeticionesAJAXService){
  }

  ngOnInit(): void {
    this.ajax.peticionDetalles(this.id);
  }
}
