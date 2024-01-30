import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    importProvidersFrom([HttpClientModule]),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptotracker-28ea4","appId":"1:388100410903:web:c8d4e69108cc32a8329652","databaseURL":"https://cryptotracker-28ea4-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"cryptotracker-28ea4.appspot.com","apiKey":"AIzaSyD50unAKW4yj7Z38r10YBJa15OypiWLILQ","authDomain":"cryptotracker-28ea4.firebaseapp.com","messagingSenderId":"388100410903","measurementId":"G-JTTKZ8HBSK"}))),importProvidersFrom(provideFirestore(() => getFirestore())),importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptotracker-28ea4","appId":"1:388100410903:web:c8d4e69108cc32a8329652","databaseURL":"https://cryptotracker-28ea4-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"cryptotracker-28ea4.appspot.com","apiKey":"AIzaSyD50unAKW4yj7Z38r10YBJa15OypiWLILQ","authDomain":"cryptotracker-28ea4.firebaseapp.com","messagingSenderId":"388100410903","measurementId":"G-JTTKZ8HBSK"}))),importProvidersFrom(provideAuth(() => getAuth())),importProvidersFrom(provideStorage(() => getStorage())),importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptotracker-28ea4","appId":"1:388100410903:web:c8d4e69108cc32a8329652","databaseURL":"https://cryptotracker-28ea4-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"cryptotracker-28ea4.appspot.com","apiKey":"AIzaSyD50unAKW4yj7Z38r10YBJa15OypiWLILQ","authDomain":"cryptotracker-28ea4.firebaseapp.com","messagingSenderId":"388100410903","measurementId":"G-JTTKZ8HBSK"}))),importProvidersFrom(provideFirestore(() => getFirestore())),
  ]
};
