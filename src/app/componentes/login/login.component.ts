import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  AuthGoogleService = inject(AuthGoogleService); // inyecta el servicio de autenticacion

  router = inject(Router); // inyecta el router

  form = new FormGroup({  // crea un nuevo formulario
    email: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    if (this.form.valid) {
      console.log('Iniciando login...');
      this.AuthGoogleService.login(this.form.value as User)
        .then(resp => {
          console.log('Login exitoso:', resp);
          this.router.navigate(['/dashboard'])
            .then(() => console.log('Navegación exitosa'))
            .catch(err => console.error('Error en navegación:', err));
        })
        .catch(error => {
          console.error('Error al iniciar sesión:', error);
        });
    }
  } 

  onClickGoogle() {
    console.log('Iniciando login con Google...');
    this.AuthGoogleService.loginGoogle()
      .then(resp => {
        console.log('Login con Google exitoso:', resp);
        this.router.navigate(['/dashboard'])
          .then(() => console.log('Navegación exitosa'))
          .catch(err => console.error('Error en navegación:', err));
      })
      .catch(error => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  }


}
