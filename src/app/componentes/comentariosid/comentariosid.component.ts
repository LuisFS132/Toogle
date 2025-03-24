import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ComentariosService } from '../../servicios/comentarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comentariosid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentariosid.component.html',
  styleUrl: './comentariosid.component.css'
})
export class ComentariosidComponent implements OnInit {
  resultado: any[] = [];
  resp: any = {};
  
    constructor(
      private _activatedRoute: ActivatedRoute,
      private _servComentarios: ComentariosService,
      private _router: Router
    ){}
  
    ngOnInit(): void {
      this._activatedRoute.params.subscribe(params => {
        this._servComentarios.buscarComentario(params['valor'])
          .subscribe((respuesta: any) => {
            this.resp = respuesta;
            this.resultado = this.resp["result"];
            console.log('Resultados:', this.resultado);
          });
      });
    }
  
    verComentario(idx: number){
      this._router.navigate(['/comentario', idx]);
    }
  
    regresar() {
      this._router.navigate(['/comentarios']);
    }
  }

