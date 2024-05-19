import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfoDeviderComponent } from './restaurant-info-devider.component';

describe('RestaurantInfoDeviderComponent', () => {
  let component: RestaurantInfoDeviderComponent;
  let fixture: ComponentFixture<RestaurantInfoDeviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantInfoDeviderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantInfoDeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
