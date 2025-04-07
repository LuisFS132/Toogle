import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { InicioToService } from '../../servicios/inicio-to.service';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nuevopost',
  imports: [FormsModule, JsonPipe],
  templateUrl: './nuevopost.component.html',
  styleUrl: './nuevopost.component.css'
})
export class NuevopostComponent {

}
