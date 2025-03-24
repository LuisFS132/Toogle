import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  resp: any = {};
  usuarios: any[] = [];

  constructor(private _servUsuarios: UsuariosService, private _router: Router) {}

  ngOnInit(): void {
    this._servUsuarios.getAllUsuarios().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.usuarios = this.resp["result"];
        console.log(this.usuarios);
      }
    );
  }

  buscarUsuario(termino: string) {
    if (termino.trim().length > 0) {
      this._router.navigate(['/buscar-usuario', termino]);
    }
  }

  verUsuario(idx: number) {
    this._router.navigate(['/buscar-usuario', idx]);
  }
}
