import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private _http: HttpClient) { }

  getAllComentarios() {
    return this._http.get(`http://apiventas4a.com/comments`);
  }

  getUnComentario(idx: number){
    return this._http.get(`http://apiventas4a.com/comments?select=*&where=id=${idx}`);
  }

  buscarComentario(valor: string){
    return this._http.get(`http://apiventas4a.com/comments?select=*&where=id=${valor}`);
  }
}
