import { Component, Input, OnInit } from '@angular/core';
import { PeticionesAJAXService } from '../peticiones-ajax.service';
import { CommonModule, Location } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { RouterModule } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {

  @Input() id:string = "";
  historial: any[]=[];

  constructor (public ajax: PeticionesAJAXService, public location: Location, public firestore: FirestoreService, public auth: LoginService){
  }

  ngOnInit() {
    this.ajax.peticionDetalles(this.id);
    this.ajax.peticionHistorial(this.id).subscribe((datos)=>{
      this.historial=datos.prices;
      this.renderChart();
    });
  }

  renderChart() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.historial.map(entry => new Date(entry[0]).toLocaleDateString()),
        datasets: [{
          label: 'Historico de Cotización (Euros)',
          data: this.historial.map(entry => entry[1]),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true
          }
        }
      }
    });
  }

  goBack(){
    this.location.back();
  }

  seguir(id:string){
    this.firestore.seguirCrypto(this.auth.usuario.uid, id);
  }

  comprobarMoneda(idMoneda: any): boolean {
    return !this.firestore.datos.map(item => item.idMoneda).includes(idMoneda);
  }
}
