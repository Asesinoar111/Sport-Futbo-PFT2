import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarritoFavoritoComponent } from './add-carrito-favorito.component';

describe('AddCarritoFavoritoComponent', () => {
  let component: AddCarritoFavoritoComponent;
  let fixture: ComponentFixture<AddCarritoFavoritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCarritoFavoritoComponent]
    });
    fixture = TestBed.createComponent(AddCarritoFavoritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
