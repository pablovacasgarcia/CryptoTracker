import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { getDocs, collection, onSnapshot, addDoc, query, where, doc, deleteDoc } from 'firebase/firestore';
import { PeticionesAJAXService } from './peticiones-ajax.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  firestore = inject(Firestore);
  datos:any[]=[];

  constructor(private ajax: PeticionesAJAXService) { }

  obtenerDatos(idUsuario:string){
    const consulta=query(collection(this.firestore, "monedas"), where('idUsuario', '==', idUsuario))
    getDocs(consulta).then(response=>{
      this.datos=response.docs.map(doc=>doc.data());
    });
  }

  obtenerMonedas(idUsuario:string){
    this.ajax.seguidas=[];
    this.ajax.index=0;
    const consulta=query(collection(this.firestore, "monedas"), where('idUsuario', '==', idUsuario))
    getDocs(consulta).then(response=>{
      let datos=response.docs.map(doc=>doc.data());
      let ids:any[]=[];
      datos.forEach(moneda => {
        ids.push(moneda['idMoneda']);
      });
      this.ajax.peticionSeguidas(ids);
    });
  }

  seguirCrypto(idUsuario:any,idMoneda:any, portfolio=false){
    const consulta = query(collection(this.firestore, "monedas"), where('idUsuario', '==', idUsuario), where('idMoneda', '==', idMoneda));
    getDocs(consulta).then(response=>{
      if(response.empty){
        const docRef =  addDoc(collection(this.firestore, "monedas"), {
          idUsuario: idUsuario,
          idMoneda: idMoneda
        }).then(()=>{
          if(portfolio){
            this.obtenerMonedas(idUsuario);
          } else {
            this.obtenerDatos(idUsuario);
          }
        });
      } else {
        deleteDoc(doc(this.firestore,"monedas", response.docs[0].id)).then(()=>{
          if(portfolio){
            this.obtenerMonedas(idUsuario);
          } else {
            this.obtenerDatos(idUsuario);
          }
        });
      }
    })
  }
}
