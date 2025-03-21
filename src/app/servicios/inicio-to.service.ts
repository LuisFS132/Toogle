import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioToService {

  constructor(private _http: HttpClient) { }

  getAllPosts() {
    return this._http.get(`http://apiventas4a.com/posts`);
  }

  getUnPost(idx: number){
    return this._http.get(`http://apiventas4a.com/posts?select=*&where=id=${idx}`);
  }

  buscarPost(valor: string){
    return this._http.get(`http://apiventas4a.com/posts?select=*&where=id=${valor}`);
  }
}
