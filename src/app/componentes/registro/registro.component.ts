import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'; // importa los formularios de angular
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  AuthGoogleService = inject(AuthGoogleService); // inyecta el servicio de autenticacion
  router = inject(Router); // inyecta el router

  form = new FormGroup({  // crea un nuevo formulario
    email: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required]),
  })

  onSubmit(){ // funcion que se ejecuta al enviar el formulario
    if(this.form.valid){
      this.AuthGoogleService.register(this.form.value as User)
      .then(resp => {
        this.router.navigate(['/login']) // redirige a la pagina de login
      })
    }

  }

}
