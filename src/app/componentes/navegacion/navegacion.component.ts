import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink, CommonModule],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  uid: string | null = null;
  displayName: string | null = null;
  photoURL: string | null = null;

  AuthGoogleService = inject(AuthGoogleService); // inyecta el servicio de autenticacion

  router = inject(Router); // inyecta el router

  logOut() { // funcion que se ejecuta al hacer click en el boton de logout
    // Limpiar datos inmediatamente
    this.uid = null;
    this.displayName = null;
    this.photoURL = null;
    
    this.AuthGoogleService.logLogout()
    .then(()=> {
      this.router.navigate(['/login']) // redirige a la pagina de login
    })
    .catch(error => console.log('Error al cerrar sesión:', error)); // muestra un error si no se puede cerrar sesion

  } // fin de la funcion logOut

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.displayName = user.displayName;
        this.photoURL = user.photoURL;
      } else {
        // Limpiar datos cuando no hay usuario
        this.uid = null;
        this.displayName = null;
        this.photoURL = null;
      }
    });
  }
}
