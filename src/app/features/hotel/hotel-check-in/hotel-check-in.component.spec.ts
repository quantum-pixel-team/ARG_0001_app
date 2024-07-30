import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelCheckInComponent } from './hotel-check-in.component';

describe('HotelCheckInComponent', () => {
  let component: HotelCheckInComponent;
  let fixture: ComponentFixture<HotelCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelCheckInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
