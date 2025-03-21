import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosIdComponent } from './productos-id.component';

describe('ProductosIdComponent', () => {
  let component: ProductosIdComponent;
  let fixture: ComponentFixture<ProductosIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
