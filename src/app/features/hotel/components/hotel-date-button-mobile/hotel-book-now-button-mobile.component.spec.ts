import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookNowButtonMobileComponent } from './hotel-book-now-button-mobile.component';

describe('HotelBookNowButtonMobileComponent', () => {
  let component: HotelBookNowButtonMobileComponent;
  let fixture: ComponentFixture<HotelBookNowButtonMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookNowButtonMobileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelBookNowButtonMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
