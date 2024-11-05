import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraPorEquiposComponent } from './compra-por-equipos.component';

describe('CompraPorEquiposComponent', () => {
  let component: CompraPorEquiposComponent;
  let fixture: ComponentFixture<CompraPorEquiposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompraPorEquiposComponent]
    });
    fixture = TestBed.createComponent(CompraPorEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
