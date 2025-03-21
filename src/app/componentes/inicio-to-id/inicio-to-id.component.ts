import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { InicioToService } from '../../servicios/inicio-to.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-to-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-to-id.component.html',
  styleUrl: './inicio-to-id.component.css'
})
export class InicioToIdComponent implements OnInit{
  resultado: any[] = [];
  resp: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servPosts: InicioToService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._servPosts.buscarPost(params['valor'])
        .subscribe((respuesta: any) => {
          this.resp = respuesta;
          this.resultado = this.resp["result"];
          console.log('Resultados:', this.resultado);
        });
    });
  }

  verPost(idx: number){
    this._router.navigate(['/post', idx]);
  }

  regresar() {
    this._router.navigate(['/inicio']);
  }
}
