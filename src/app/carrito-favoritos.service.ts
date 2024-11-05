// carrito-favoritos.service.ts
import { Injectable } from '@angular/core';
import { Product } from './product-mock.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoFavoritosService {
  carrito: Product[] = [];
  favoritos: Product[] = [];

  agregarAlCarrito(product: Product): void {
    this.carrito.push(product);
  }

  agregarAFavoritos(product: Product): void {
    this.favoritos.push(product);
  }

  obtenerCarrito(): Product[] {
    return this.carrito;
  }

  obtenerFavoritos(): Product[] {
    return this.favoritos;
  }
}
