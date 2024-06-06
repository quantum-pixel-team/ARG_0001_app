import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSpecialityComponent } from './restaurant-speciality.component';

describe('RestaurantSpecialityComponent', () => {
  let component: RestaurantSpecialityComponent;
  let fixture: ComponentFixture<RestaurantSpecialityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantSpecialityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
