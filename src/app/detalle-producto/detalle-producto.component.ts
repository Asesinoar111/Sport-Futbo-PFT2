import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../catalogo/catalogo.mock';
import { productsList } from '../catalogo/catalogo.mock';
import { CarritoService } from '../carrito-sevice.service';
import { FavoritosServiceService } from '../favoritos-service.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit{
  product?: Product;
  productList: Product[] = productsList;
  cambiarImg: string = '';

  constructor(
    private _route: ActivatedRoute,
    private carritoService: CarritoService,
    private FavoritosServiceService : FavoritosServiceService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.product = this.productList.find(product => product.name === params['productName']);
      if (this.product) {
        this.cambiarImg = this.product.src; // Inicia con la imagen principal
      }
    });
  }

  cambiarImagen(nuevaImg: string): void {
    this.cambiarImg = nuevaImg;
  }

  agregarAlCarrito(): void {
    if (this.product) {
      this.carritoService.agregarProducto(this.product);
      alert(`${this.product.name} ha sido añadido al carrito`);
    }
  }

  agregarAFavoritos(): void {
    if (this.product) {
    this.FavoritosServiceService.agregarAFavoritos(this.product);
      alert(`${this.product.name} ha sido añadido a favoritos`);
    }
  }
}
