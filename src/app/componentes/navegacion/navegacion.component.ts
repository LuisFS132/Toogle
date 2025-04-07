import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  imports: [RouterLink],
  templateUrl: './navegacion.component.html',
  styleUrl: './navegacion.component.css'
})
export class NavegacionComponent {

  AuthGoogleService = inject(AuthGoogleService); // inyecta el servicio de autenticacion

  router = inject(Router); // inyecta el router

  logOut() { // funcion que se ejecuta al hacer click en el boton de logout
    this.AuthGoogleService.logLogout()
    .then(()=> {
      this.router.navigate(['/login']) // redirige a la pagina de login
    })
    .catch(error => console.log('Error al cerrar sesión:', error)); // muestra un error si no se puede cerrar sesion

  } // fin de la funcion logOut

}
