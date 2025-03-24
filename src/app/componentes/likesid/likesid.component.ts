import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { LikesService } from '../../servicios/likes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-likesid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './likesid.component.html',
  styleUrl: './likesid.component.css'
})
export class LikesidComponent implements OnInit{
  resultado: any[] = [];
  resp: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servLikes: LikesService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._servLikes.buscarLike(params['valor'])
        .subscribe((respuesta: any) => {
          this.resp = respuesta;
          this.resultado = this.resp["result"];
          console.log('Resultados:', this.resultado);
        });
    });
  }

  verLike(idx: number){
    this._router.navigate(['/like', idx]);
  }

  regresar() {
    this._router.navigate(['/likes']);
  }

}
