import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _http: HttpClient) { }

  getAllUsuarios() {
    return this._http.get(`http://apiventas4a.com/users`);
  }

  getUnUsuario(idx: number){
    return this._http.get(`http://apiventas4a.com/users?select=*&where=id=${idx}`);
  }

  buscarUsuario(valor: string){
    return this._http.get(`http://apiventas4a.com/users?select=*&where=id=${valor}`);
  }
}
