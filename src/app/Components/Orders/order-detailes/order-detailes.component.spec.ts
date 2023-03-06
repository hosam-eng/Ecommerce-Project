import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailesComponent } from './order-detailes.component';

describe('OrderDetailesComponent', () => {
  let component: OrderDetailesComponent;
  let fixture: ComponentFixture<OrderDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
