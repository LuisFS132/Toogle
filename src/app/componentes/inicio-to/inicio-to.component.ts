import { Component, OnInit } from '@angular/core';
import { InicioToService } from '../../servicios/inicio-to.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-to',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-to.component.html',
  styleUrl: './inicio-to.component.css'
})
export class InicioToComponent implements OnInit {
  resp: any = {};
  posts: any[] = [];

  constructor(private _servPosts: InicioToService, private _router: Router) {}

  ngOnInit(): void {
    this._servPosts.getAllPosts().subscribe(
      (respuesta) => {
        this.resp = respuesta;
        this.posts = this.resp["result"];
        console.log(this.posts);
      }
    );
  }

  buscarPost(termino: string) {
    if (termino.trim().length > 0) {
      this._router.navigate(['/buscar-post', termino]);
    }
  }

  verPost(idx: number) {
    this._router.navigate(['/buscar-post', idx]);
  }
}