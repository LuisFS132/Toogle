import { Component, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthGoogleService } from '../../servicios/auth-google.service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  AuthGoogleService = inject(AuthGoogleService);
  router = inject(Router);

  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Iniciando registro...');
      this.AuthGoogleService.register(this.form.value as User)
        .then(resp => {
          console.log('Registro exitoso:', resp);
          this.router.navigate(['/login'])
            .then(() => console.log('Navegación exitosa'))
            .catch(err => console.error('Error en navegación:', err));
        })
        .catch(error => {
          console.error('Error al registrar:', error);
        });
    }
  }

  onClickGoogle() {
    console.log('Iniciando registro con Google...');
    this.AuthGoogleService.loginGoogle()
      .then(resp => {
        console.log('Registro con Google exitoso:', resp);
        this.router.navigate(['/inicio'])
          .then(() => console.log('Navegación exitosa'))
          .catch(err => console.error('Error en navegación:', err));
      })
      .catch(error => {
        console.error('Error al registrar con Google:', error);
      });
  }
}
