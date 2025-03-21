import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioToIdComponent } from './inicio-to-id.component';

describe('InicioToIdComponent', () => {
  let component: InicioToIdComponent;
  let fixture: ComponentFixture<InicioToIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioToIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioToIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
