import { Component, OnInit } from '@angular/core';
import { Product } from '../product-mock.service';
import { FavoritosServiceService } from '../favoritos-service.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  favoritos: Product[] = [];
  totalFavoritos: number = 0;

  constructor(private FavoritosServiceService: FavoritosServiceService) { }

  ngOnInit(): void {
    this.FavoritosServiceService.getFavoritos().subscribe((data: Product[]) => {
      this.favoritos = data;
      this.totalFavoritos = this.favoritos.length;
    });
  }

  eliminarDeFavoritos(product: Product): void {
    this.FavoritosServiceService.eliminarDeFavoritos(product);
  }
}
