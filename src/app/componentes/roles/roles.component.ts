import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../servicios/roles.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  resp: any = {};
  roles: any[] = [];

  constructor(private _servRoles: RolesService, private _router: Router) {}

  ngOnInit(): void {
    this._servRoles.getAllRoles().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.roles = this.resp["result"];
        console.log(this.roles);
      }
    );
  }

  buscarRol(termino: string) {
    if (termino.trim().length > 0) {
      this._router.navigate(['/buscar-rol', termino]);
    }
  }

  verRol(idx: number) {
    this._router.navigate(['/buscar-rol', idx]);
  }
}
