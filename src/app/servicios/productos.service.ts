import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private _http: HttpClient) { }

  getAllProductos(){
    return this._http.get(`http://apiventas4a.com/productos`);
  }

  getUnProducto(idx: number){
    return this._http.get(`http://apiventas4a.com/productos?select=*&where=idProducto=${idx}`);
  }

  buscarProducto(valor: string){
    return this._http.get(`http://apiVentas4A.com/productos?select=*&where=idProducto=${valor}`);
  }
}


