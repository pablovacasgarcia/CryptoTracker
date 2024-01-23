import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesAJAXService {

  
  items:any[] = [];
  detalles:any=undefined;

  constructor (private http: HttpClient) {
    
  }

  public peticionAJAX(){
    this.http.get("https://api.coingecko.com/api/v3/search/trending").subscribe((datos:any)=>{
      this.items = datos.coins;
    });
  }

  public peticionDetalles(id:any){
    this.http.get("https://api.coingecko.com/api/v3/coins/"+id).subscribe((datos:any)=>{
      console.log(datos)
      this.detalles = datos;
    });
  }


}
