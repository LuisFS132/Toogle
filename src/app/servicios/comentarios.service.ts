import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  constructor(private _http: HttpClient) { }

  getAllComments() {
    return this._http.get(`http://apiventas4a.com/comments`);
  }
}
