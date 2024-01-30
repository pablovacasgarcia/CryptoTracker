import { Injectable, inject, OnInit } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  auth=inject(FirebaseApp);

  constructor(public router: Router) { }

  sesion:any=getAuth();
  usuario:any=null;


  cerrarSesion(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.usuario=null;
    }).catch((error) => {
        console.log("Error al cerrar sesión")
    });
  }

  registro(password:string, password2:string, email:any, displayName:string) {
    if (password === password2) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential:any) => {
                // Signed up 
                const user = userCredential.user;
                // Establecer el displayName
                if (auth.currentUser){
                  updateProfile(auth.currentUser, {
                      displayName: displayName
                  }).then(()=>{
                    this.usuario=auth.currentUser;
                    this.router.navigate([''])
                  }).catch((error:any) => {
                      console.log("Error al establecer el displayName:", error);
                  });
                }
                
            })
            .catch((error:any) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // Manejar el error al crear el usuario
            });
    }
}


iniciarSesion(email:string, password:string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential:any) => {
        // Signed in 
        this.usuario = userCredential.user;
        this.router.navigate([''])
        // ...
    })
    .catch((error:any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });
}

iniciarSesionGoogle()
{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result:any) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential){
              const token = credential.accessToken;
            }
            
            // The signed-in user info.
            this.usuario = result.user;
            this.router.navigate([''])
        }).catch((error:any) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}
}
