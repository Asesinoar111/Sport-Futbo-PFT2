// carrito.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product-mock.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Product[] = [];
  private carritoSubject = new BehaviorSubject<Product[]>(this.carrito);

  getCarrito(): Observable<Product[]> {
    return this.carritoSubject.asObservable();
  }

  agregarProducto(product: Product): void {
    this.carrito.push(product);
    this.carritoSubject.next(this.carrito);
  }

  eliminarDelCarrito(product: Product): void {
    this.carrito = this.carrito.filter(item => item !== product);
    this.carritoSubject.next(this.carrito); 
  }

  vaciarCarrito(): void {
    this.carrito = [];
    this.carritoSubject.next(this.carrito); // Notificar a los componentes que el carrito está vacío
  }
}
