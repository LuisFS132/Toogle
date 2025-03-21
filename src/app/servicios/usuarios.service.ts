import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(`http://apiventas4a.com/users`);
  }
}
