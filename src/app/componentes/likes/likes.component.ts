import { Component, OnInit } from '@angular/core';
import { LikesService } from '../../servicios/likes.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  imports: [],
  templateUrl: './likes.component.html',
  styleUrl: './likes.component.css'
})
export class LikesComponent implements OnInit {
  resp: any = {};
  likes: any[] = [];

  constructor(private _servLikes: LikesService, private _router: Router) {}

  ngOnInit(): void {
    this.loadLikes();
  }

  loadLikes() {
    this._servLikes.getAllLikes().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.likes = this.resp["result"];
        console.log(this.likes);
      }
    );
  }
}
