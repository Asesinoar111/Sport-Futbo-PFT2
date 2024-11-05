import { TestBed } from '@angular/core/testing';

import { CarritoSeviceService } from './carrito-sevice.service';

describe('CarritoSeviceService', () => {
  let service: CarritoSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
