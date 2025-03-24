import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private _http: HttpClient) { }

  getAllRoles() {
    return this._http.get(`http://apiventas4a.com/roles_permissions`);
  }

  getUnRol(idx: number){
    return this._http.get(`http://apiventas4a.com/roles_permissions?select=*&where=id=${idx}`);
  }

  buscarRol(valor: string){
    return this._http.get(`http://apiventas4a.com/roles_permissions?select=*&where=id=${valor}`);
  }
}
