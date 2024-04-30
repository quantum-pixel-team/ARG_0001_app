import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelReservationContainerComponent } from './hotel-reservation-container.component';

describe('HotelReservationContainerComponent', () => {
  let component: HotelReservationContainerComponent;
  let fixture: ComponentFixture<HotelReservationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelReservationContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelReservationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
