import { Component, OnInit } from '@angular/core';
import { ComentariosService } from '../../servicios/comentarios.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit {
  resp: any = {};
  comentarios: any[] = [];

  constructor(private _servComentarios: ComentariosService, private _router: Router) {}

  ngOnInit(): void {
    this.loadComentarios();
  }

  loadComentarios() {
    this._servComentarios.getAllComments().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.comentarios = this.resp["result"];
        console.log(this.comentarios);
      }
    );
  }
}
