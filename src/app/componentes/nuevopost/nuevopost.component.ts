import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { InicioToService } from '../../servicios/inicio-to.service';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevopost',
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevopost.component.html',
  styleUrl: './nuevopost.component.css'
})
export class NuevopostComponent {
  resp:any={};
  selectedFile: File | null = null;
  uid: string | null = null;
  displayName: string | null = null;
  photoURL: string | null = null;

  constructor(private _service : InicioToService, private afAuth: AngularFireAuth, private router: Router)
  {this.afAuth.authState.subscribe(user => {
    if (user) {
      this.uid = user.uid;
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
    }
  });
  }

  ngOnInit(): void {

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  async guardar(valores : any){
    if (!this.uid) {
      console.error('Usuario no autenticado');
      return;
    }

    let image_filename = '';
    if (this.selectedFile) {
      image_filename = this.selectedFile.name;
    }

    let objetoPost = new Post(this.uid, valores.content, image_filename);
    this._service.nuevoPost(objetoPost).subscribe(
      (respuesta)=>{
        this.resp = respuesta;
        console.log("Respuesta: "+ this.resp["result"]["comment"]);
        this.selectedFile = null;
        this.router.navigate(['/inicio']).then(() => {
          window.location.reload();
        });
      }
    );
  }
}
