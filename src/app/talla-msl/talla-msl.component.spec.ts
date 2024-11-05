import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallaMslComponent } from './talla-msl.component';

describe('TallaMslComponent', () => {
  let component: TallaMslComponent;
  let fixture: ComponentFixture<TallaMslComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallaMslComponent]
    });
    fixture = TestBed.createComponent(TallaMslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
