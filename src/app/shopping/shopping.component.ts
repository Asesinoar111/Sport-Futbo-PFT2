// carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito-sevice.service';
import { Product } from '../product-mock.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})

export class ShoppingComponent implements OnInit {
  carrito: Product[] = [];
  totalPrice: number = 0;
  totalCarrito: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe((products: Product[]) => {
      this.carrito = products;
      this.totalPrice = this.carrito.reduce((acc, item) => acc + item.price, 0);
      this.totalCarrito = this.carrito.length;
    });
  }

  eliminarDelCarrito(product: Product): void {
    this.carritoService.eliminarDelCarrito(product);
  }

  comprarTodo(): void {
    if (this.carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }
  
    // Mostrar una alerta de confirmación de compra
    alert('Compra realizada con éxito. ¡Gracias por tu compra!');
    
    // Vaciar el carrito
    this.carritoService.vaciarCarrito();
    
    // Actualizar la lista de productos en el carrito
    this.carritoService.getCarrito().subscribe((products: Product[]) => {
      this.carrito = products;
      this.totalPrice = 0; // Opcional: Resetear el precio total
    });
  }
}
