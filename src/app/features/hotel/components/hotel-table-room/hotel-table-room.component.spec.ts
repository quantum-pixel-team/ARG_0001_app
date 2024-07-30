import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelTableRoomComponent } from './hotel-table-room.component';

describe('HotelTableRoomComponent', () => {
  let component: HotelTableRoomComponent;
  let fixture: ComponentFixture<HotelTableRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelTableRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelTableRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
