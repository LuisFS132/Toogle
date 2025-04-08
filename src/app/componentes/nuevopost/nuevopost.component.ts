import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { InicioToService } from '../../servicios/inicio-to.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nuevopost',
  imports: [FormsModule, JsonPipe],
  templateUrl: './nuevopost.component.html',
  styleUrl: './nuevopost.component.css'
})
export class NuevopostComponent {
  resp:any={};

  constructor(private _service : InicioToService)
  {
  }

  ngOnInit(): void {

  }

  guardar(valores : any){

    console.log(valores.nombre);

    //Crear objeto de tipo Producto
    let objetoPost = new Post(valores.uid, valores.content, valores.image_url);

    this._service.nuevoPost(objetoPost).subscribe(

    (respuesta)=>{
      this.resp = respuesta;
      console.log("Respuesta: "+ this.resp["result"]["comment"]);
    }

    );
  }
}
