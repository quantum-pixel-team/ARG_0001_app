import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSpecialityDeviderComponent } from './restaurant-speciality-devider.component';

describe('RestaurantSpecialityDeviderComponent', () => {
  let component: RestaurantSpecialityDeviderComponent;
  let fixture: ComponentFixture<RestaurantSpecialityDeviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantSpecialityDeviderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantSpecialityDeviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
