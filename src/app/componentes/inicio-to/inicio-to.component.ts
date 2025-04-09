import { Component, OnInit } from '@angular/core';
import { InicioToService } from '../../servicios/inicio-to.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-inicio-to',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-to.component.html',
  styleUrl: './inicio-to.component.css'
})
export class InicioToComponent implements OnInit {
  resp: any = {};
  posts: any[] = [];
  uid: string | null = null;
  displayName: string | null = null;
  email: string | null = null;
  photoURL: string | null = null;


  constructor(private _servPosts: InicioToService, private _router: Router, public afAuth: AngularFireAuth) {this.afAuth.authState.subscribe(user => {
    if (user) {
      this.uid = user.uid;
      this.displayName = user.displayName;
      this.email = user.email;
      this.photoURL = user.photoURL;
    }
  });}

  ngOnInit(): void {
    this._servPosts.getAllPosts().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.posts = this.resp["result"];
        console.log(this.posts);
      }
    );
  }

  buscarPost(termino: string) {
    if (termino.trim().length > 0) {
      this._router.navigate(['/buscar-post', termino]);
    }
  }

  verPost(idx: number) {
    this._router.navigate(['/buscar-post', idx]);
  }
}