import { Component, OnInit } from '@angular/core';
import { Product } from '../product-mock.service';
import { CarritoService } from '../carrito-sevice.service';
import { FavoritosServiceService } from '../favoritos-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  totalCarrito: number = 0;
  totalFavoritos: number = 0;

  constructor(
    private carritoService: CarritoService,
    private favoritosService: FavoritosServiceService
  ) { }

  ngOnInit(): void {
    this.carritoService.getCarrito().subscribe((carrito: Product[]) => {
      this.totalCarrito = carrito.length;
    });

    this.favoritosService.getFavoritos().subscribe((favoritos: Product[]) => {
      this.totalFavoritos = favoritos.length;
    });
  }

  eliminarDelCarrito(product: Product): void {
    this.carritoService.eliminarDelCarrito(product);
  }

  eliminarDeFavoritos(product: Product): void {
    this.favoritosService.eliminarDeFavoritos(product);
  }

}
