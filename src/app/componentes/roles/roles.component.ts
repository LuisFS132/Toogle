import { Component, OnInit } from '@angular/core';
import { RolesService } from '../../servicios/roles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  resp: any = {};
  roles: any[] = [];

  constructor(private _servRoles: RolesService, private _router: Router) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles() {
    this._servRoles.getAllRoles().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.roles = this.resp["result"];
        console.log(this.roles);
      }
    );
  }
}
