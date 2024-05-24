import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCuisineComponent } from './restaurant-cuisine.component';

describe('RestaurantCusineComponent', () => {
  let component: RestaurantCuisineComponent;
  let fixture: ComponentFixture<RestaurantCuisineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantCuisineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
