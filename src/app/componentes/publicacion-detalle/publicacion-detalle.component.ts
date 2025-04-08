import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComentariosService } from '../../servicios/comentarios.service';
import { LikesService } from '../../servicios/likes.service';

@Component({
  selector: 'app-publicacion-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './publicacion-detalle.component.html',
  styleUrls: ['./publicacion-detalle.component.css']
})
export class PublicacionDetalleComponent implements OnInit {
  @Input() postId!: number; // ID de la publicación desde el padre
  comentarios: any[] = [];
  likes: any[] = [];
  nuevoComentario: string = '';
  yaDiLike: boolean = false;

  constructor(
    private comentariosService: ComentariosService,
    private likesService: LikesService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    // Cargar comentarios
    this.comentariosService.buscarComentario(this.postId.toString()).subscribe(
      (resp: any) => this.comentarios = resp.result || []
    );

    // Cargar likes
    this.likesService.buscarLike(this.postId.toString()).subscribe(
      (resp: any) => {
        this.likes = resp.result || [];
        // Verificar si el usuario actual ya dio like (pseudocódigo)
        // this.yaDiLike = this.likes.some(like => like.user_id === usuarioActualId);
      }
    );
  }

  toggleLike(): void {
    // Lógica para dar/quitar like (ejemplo simplificado)
    this.yaDiLike = !this.yaDiLike;
    // Aquí llamarías al servicio para crear/eliminar like
  }

  agregarComentario(): void {
    if (this.nuevoComentario.trim()) {
      // Aquí iría la lógica para enviar el comentario a tu API
      console.log('Nuevo comentario:', this.nuevoComentario);
      this.nuevoComentario = '';
      this.cargarDatos(); // Recargar comentarios
    }
  }
}