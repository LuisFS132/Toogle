import { Component, OnInit } from '@angular/core';
import { InicioToService } from '../../servicios/inicio-to.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-to',
  imports: [],
  templateUrl: './inicio-to.component.html',
  styleUrl: './inicio-to.component.css'
})
export class InicioToComponent implements OnInit {

  resp : any = {};

  posts : any[] = [];

  constructor(private _servPosts : InicioToService, private _router: Router){

  }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this._servPosts.getAllPosts().subscribe(
      (respuesta)=>{
        this.resp = respuesta;
        this.posts = this.resp["result"];
        console.log(this.posts);
      }
    );
  }

}