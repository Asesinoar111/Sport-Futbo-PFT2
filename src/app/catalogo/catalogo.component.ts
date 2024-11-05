import { Component, OnInit } from '@angular/core';
import { marcas } from './catalogo.mock';
import { equipos } from './catalogo.mock';
import { generos } from './catalogo.mock';
import { categorias } from './catalogo.mock';
import { ProductService } from '../product-mock.service';
import { Product } from '../product-mock.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
  products: Product[] = [];
  teams = equipos;
  genders = generos;
  filteredProducts: Product[] = [];
  selectedFilters: { [key in 'teams' | 'genders' | 'categories' | 'brands']: Set<string> } = {
    teams: new Set<string>(),
    genders: new Set<string>(),
    categories: new Set<string>(),
    brands: new Set<string>()
};

  filteredProductCount: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products];
  }

  updateFilter(filterType: string, value: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    const filterSet = this.selectedFilters[filterType as keyof typeof this.selectedFilters];
    isChecked ? filterSet.add(value) : filterSet.delete(value);
    this.applyFilters();
}

applyFilters() {
  this.filteredProducts = this.products.filter(product => {
      return (
          (this.selectedFilters.teams.size === 0 || this.selectedFilters.teams.has(product.equipo)) &&
          (this.selectedFilters.genders.size === 0 || this.selectedFilters.genders.has(product.genero)) &&
          (this.selectedFilters.categories.size === 0 || this.selectedFilters.categories.has(product.categoria)) &&
          (this.selectedFilters.brands.size === 0 || this.selectedFilters.brands.has(product.marca))
      );
  });

  this.filteredProductCount = this.filteredProducts.length;

}

  clearFilters() {
    this.selectedFilters.teams.clear();
    this.selectedFilters.genders.clear();
    this.selectedFilters.categories.clear();
    this.selectedFilters.brands.clear();
    this.applyFilters();
    this.uncheckAllCheckboxes();
  }

  uncheckAllCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = false;
    });
  }

} 