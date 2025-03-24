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
    this._servComentarios.getAllComentarios().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.comentarios = this.resp["result"];
        console.log(this.comentarios);
      }
    );
  }

  buscarComentario(termino: string) {
    if (termino.trim().length > 0) {
      this._router.navigate(['/buscar-comentario', termino]);
    }
  }

  verComentario(idx: number) {
    this._router.navigate(['/buscar-comentario', idx]);
  }
}
