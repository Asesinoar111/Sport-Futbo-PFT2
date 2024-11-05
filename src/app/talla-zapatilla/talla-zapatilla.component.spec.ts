import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaZapatillaComponent } from './talla-zapatilla.component';

describe('TallaZapatillaComponent', () => {
  let component: TallaZapatillaComponent;
  let fixture: ComponentFixture<TallaZapatillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallaZapatillaComponent]
    });
    fixture = TestBed.createComponent(TallaZapatillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
