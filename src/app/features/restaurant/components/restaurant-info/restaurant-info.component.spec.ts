import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantInfoComponent } from './restaurant-info.component';
import { RestaurantModule } from '../../restaurant.module';

describe('RestaurantInfoComponent', () => {
  let component: RestaurantInfoComponent;
  let fixture: ComponentFixture<RestaurantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantInfoComponent],
      imports: [RestaurantModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
