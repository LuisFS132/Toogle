import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { ProductosService } from '../../servicios/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-id.component.html',
  styleUrl: './productos-id.component.css'
})
export class ProductosIdComponent implements OnInit{
  resultado: any[] = [];
  resp: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _servProductos: ProductosService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this._servProductos.buscarProducto(params['valor'])
        .subscribe((respuesta: any) => {
          this.resp = respuesta;
          this.resultado = this.resp["result"];
          console.log('Resultados:', this.resultado);
        });
    });
  }

  verProducto(idx: number){
    this._router.navigate(['/productos', idx]);
  }

  regresar() {
    this._router.navigate(['/productos']);
  }
}
