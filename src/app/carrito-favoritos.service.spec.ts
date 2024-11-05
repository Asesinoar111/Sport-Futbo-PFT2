import { TestBed } from '@angular/core/testing';

import { CarritoFavoritosService } from './carrito-favoritos.service';

describe('CarritoFavoritosService', () => {
  let service: CarritoFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
