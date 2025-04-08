import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Post } from '../componentes/nuevopost/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  })
};

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

  nuevoPost(newpost: Post){ 
    return this._http.post(`http://apiventas4a.com/posts`, newpost.toString(),{headers:httpOptions.headers});
  }

}
