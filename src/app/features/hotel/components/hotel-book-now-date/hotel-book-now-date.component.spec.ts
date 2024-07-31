import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookNowDateComponent } from './hotel-book-now-date.component';

describe('HotelBookNowDateComponent', () => {
  let component: HotelBookNowDateComponent;
  let fixture: ComponentFixture<HotelBookNowDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookNowDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelBookNowDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
