import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {

  uid: string | null = null;
  displayName: string | null = null;
  email: string | null = null;
  photoURL: string | null = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
        this.displayName = user.displayName;
        this.email = user.email;
        this.photoURL = user.photoURL;
      }
    });
  }
}
