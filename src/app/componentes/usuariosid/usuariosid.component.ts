import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { UsuariosService } from '../../servicios/usuarios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuariosid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuariosid.component.html',
  styleUrl: './usuariosid.component.css'
})
export class UsuariosidComponent implements OnInit{
  resultado: any[] = [];
  resp: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servUsuarios: UsuariosService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._servUsuarios.buscarUsuario(params['valor'])
        .subscribe((respuesta: any) => {
          this.resp = respuesta;
          this.resultado = this.resp["result"];
          console.log('Resultados:', this.resultado);
        });
    });
  }

  verUsuario(idx: number){
    this._router.navigate(['/usuario', idx]);
  }

  regresar() {
    this._router.navigate(['/usuarios']);
  }

}
