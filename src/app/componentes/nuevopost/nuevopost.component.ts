import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { InicioToService } from '../../servicios/inicio-to.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-nuevopost',
  imports: [FormsModule, JsonPipe],
  templateUrl: './nuevopost.component.html',
  styleUrl: './nuevopost.component.css'
})
export class NuevopostComponent {
  resp:any={};
  selectedFile: File | null = null;
  uid: string | null = null;
  displayName: string | null = null;
  photoURL: string | null = null;

  constructor(private _service : InicioToService, private afAuth: AngularFireAuth)
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

  guardar(valores : any){

    console.log(valores.nombre);

    let objetoPost = new Post(valores.uid,valores.content, valores.image_url);

    this._service.nuevoPost(objetoPost).subscribe(

    (respuesta)=>{
      this.resp = respuesta;
      console.log("Respuesta: "+ this.resp["result"]["comment"]);
    }

    );
  }
}
