import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  resp: any = {};
  users: any[] = [];

  constructor(private _servUsers: UsuariosService, private _router: Router) {}

  ngOnInit(): void {
    this._servUsers.getAllUsers().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.users = this.resp["result"];
        console.log(this.users);
      }
    );
  }
}
