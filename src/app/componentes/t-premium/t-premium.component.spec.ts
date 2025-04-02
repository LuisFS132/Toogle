import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPremiumComponent } from './t-premium.component';

describe('TPremiumComponent', () => {
  let component: TPremiumComponent;
  let fixture: ComponentFixture<TPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
