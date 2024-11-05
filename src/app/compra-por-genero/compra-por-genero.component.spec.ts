import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPorGeneroComponent } from './compra-por-genero.component';

describe('CompraPorGeneroComponent', () => {
  let component: CompraPorGeneroComponent;
  let fixture: ComponentFixture<CompraPorGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPorGeneroComponent]
    });
    fixture = TestBed.createComponent(CompraPorGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
