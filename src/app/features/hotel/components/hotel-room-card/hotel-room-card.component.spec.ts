import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomCardComponent } from './hotel-room-card.component';

describe('HotelRoomCardComponent', () => {
  let component: HotelRoomCardComponent;
  let fixture: ComponentFixture<HotelRoomCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelRoomCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelRoomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
