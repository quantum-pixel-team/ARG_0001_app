import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantStafComponent } from './restaurant-staf.component';

describe('RestaurantStafComponent', () => {
  let component: RestaurantStafComponent;
  let fixture: ComponentFixture<RestaurantStafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantStafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantStafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
