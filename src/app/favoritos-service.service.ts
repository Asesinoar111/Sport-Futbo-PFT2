import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-mock.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritosServiceService {
  private favoritos: Product[] = [];
  private favoritosSubject = new BehaviorSubject<Product[]>(this.favoritos);

  getFavoritos() {
    return this.favoritosSubject.asObservable();
  }

  agregarAFavoritos(product: Product): void {
    this.favoritos.push(product);
    this.favoritosSubject.next(this.favoritos); 
  }

  eliminarDeFavoritos(product: Product): void {
    this.favoritos = this.favoritos.filter(item => item !== product);
    this.favoritosSubject.next(this.favoritos);
  }

  vaciarFavoritos(): void {
    this.favoritos = [];
    this.favoritosSubject.next(this.favoritos);
  }
}
