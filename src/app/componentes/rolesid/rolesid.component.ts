import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { RolesService } from '../../servicios/roles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rolesid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rolesid.component.html',
  styleUrl: './rolesid.component.css'
})
export class RolesidComponent implements OnInit{
  resultado: any[] = [];
  resp: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servRoles: RolesService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._servRoles.buscarRol(params['valor'])
        .subscribe((respuesta: any) => {
          this.resp = respuesta;
          this.resultado = this.resp["result"];
          console.log('Resultados:', this.resultado);
        });
    });
  }

  verRol(idx: number){
    this._router.navigate(['/rol', idx]);
  }

  regresar() {
    this._router.navigate(['/roles']);
  }

}
