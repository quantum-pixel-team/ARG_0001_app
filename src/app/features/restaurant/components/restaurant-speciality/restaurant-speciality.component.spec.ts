import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSpecialityComponent } from './restaurant-speciality.component';
import { RestaurantModule } from '../../restaurant.module';

describe('RestaurantSpecialityComponent', () => {
  let component: RestaurantSpecialityComponent;
  let fixture: ComponentFixture<RestaurantSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantSpecialityComponent],
      imports: [RestaurantModule],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
