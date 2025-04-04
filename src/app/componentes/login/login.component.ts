import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  AuthGoogleService = inject(AuthGoogleService);
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Iniciando login...');
      this.AuthGoogleService.login(this.form.value as User)
        .then(resp => {
          console.log('Login exitoso:', resp);
          this.router.navigate(['/inicio'])
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
        this.router.navigate(['/inicio'])
          .then(() => console.log('Navegación exitosa'))
          .catch(err => console.error('Error en navegación:', err));
      })
      .catch(error => {
        console.error('Error al iniciar sesión con Google:', error);
      });
  }
}
