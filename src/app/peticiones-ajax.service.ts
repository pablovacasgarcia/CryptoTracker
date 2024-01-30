import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesAJAXService {

  
  items:any[] = [];
  seguidas:any[] = [];
  detalles:any=undefined;
  index=0;

  constructor (private http: HttpClient) {
    
  }

  public peticionAJAX(busqueda=""){
    if(busqueda==""){
      this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((datos:any)=>{
        this.items = datos.coins;
      });
    } else {
      this.http.get("https://api.coingecko.com/api/v3/search?query="+busqueda).subscribe((datos:any)=>{
        this.items = datos.coins;
      });
    }
    
  }

  public peticionDetalles(id:any){
    this.http.get("https://api.coingecko.com/api/v3/coins/"+id).subscribe((datos:any)=>{
      this.detalles = datos;
    });
  }

  public peticionSeguidas(ids:any){
    if (this.index<ids.length){
      this.http.get("https://api.coingecko.com/api/v3/coins/"+ids[this.index]).subscribe((datos:any)=>{
        this.seguidas.push(datos);
        this.index+=1;
        this.peticionSeguidas(ids);
      });
    }
  }

  public peticionHistorial(id: any): Observable<any> {
    // Hacer una solicitud adicional para obtener el historial de precios (sparkline)
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=7&interval=daily`)
  }


}
