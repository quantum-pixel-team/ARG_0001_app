import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantContainerComponent } from './restaurant-container.component';

describe('RestaurantContainerComponent', () => {
  let component: RestaurantContainerComponent;
  let fixture: ComponentFixture<RestaurantContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RestaurantContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
