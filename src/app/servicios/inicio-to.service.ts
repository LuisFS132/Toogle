import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getUnPost(idx: number) {
    return this._http.get(`http://apiventas4a.com/posts?select=*&where=id=${idx}`);
  }

  buscarPost(valor: string) {
    return this._http.get(`http://apiventas4a.com/posts?select=*&where=id=${valor}`);
  }

  nuevoPost(newpost: Post) {
    const body = new URLSearchParams();
    body.set('user_id', newpost.uid);
    body.set('content', newpost.content);
    body.set('image_url', newpost.image_url);
    return this._http.post(`http://apiventas4a.com/posts`, body.toString(), httpOptions);
  }
}
