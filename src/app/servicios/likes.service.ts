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
}
