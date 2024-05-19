import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCusineComponent } from './restaurant-cusine.component';

describe('RestaurantCusineComponent', () => {
  let component: RestaurantCusineComponent;
  let fixture: ComponentFixture<RestaurantCusineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantCusineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantCusineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
