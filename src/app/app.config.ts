import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { initializeApp } from 'firebase/app';

import{AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHCEN4YaWgp57R7lwjZkPoK_vQ43pAi-Q",
  authDomain: "toogle-e1d34.firebaseapp.com",
  projectId: "toogle-e1d34",
  storageBucket: "toogle-e1d34.firebasestorage.app",
  messagingSenderId: "929192060038",
  appId: "1:929192060038:web:5a57f28d6048ad64831d07",
  measurementId: "G-KR98BVMKRZ"
};


initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), NavegacionComponent, importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig), AngularFirestoreModule)],
};
