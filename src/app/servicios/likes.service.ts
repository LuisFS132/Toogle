import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikesService {

  constructor(private _http: HttpClient) { }

  getAllLikes() {
    return this._http.get(`http://apiventas4a.com/likes`);
  }

  getUnLike(idx: number){
    return this._http.get(`http://apiventas4a.com/likes?select=*&where=id=${idx}`);
  }

  buscarLike(valor: string){
    return this._http.get(`http://apiventas4a.com/likes?select=*&where=id=${valor}`);
  }

// likes.service.ts
crearLike(postId: number, userId: number) {
  return this._http.post(`http://apiventas4a.com/likes`, { post_id: postId, user_id: userId });
}

eliminarLike(likeId: number) {
  return this._http.delete(`http://apiventas4a.com/likes?id=eq.${likeId}`);
}
}