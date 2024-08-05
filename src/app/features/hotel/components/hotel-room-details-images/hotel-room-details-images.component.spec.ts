import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelRoomDetailsImagesComponent } from './hotel-room-details-images.component';

describe('HotelRoomDetailsImagesComponent', () => {
  let component: HotelRoomDetailsImagesComponent;
  let fixture: ComponentFixture<HotelRoomDetailsImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelRoomDetailsImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelRoomDetailsImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
