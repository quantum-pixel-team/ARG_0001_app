import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomAvailabilityComponent } from './hotel-room-availability.component';

describe('HotelRoomAvailabilityComponent', () => {
  let component: HotelRoomAvailabilityComponent;
  let fixture: ComponentFixture<HotelRoomAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelRoomAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelRoomAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
