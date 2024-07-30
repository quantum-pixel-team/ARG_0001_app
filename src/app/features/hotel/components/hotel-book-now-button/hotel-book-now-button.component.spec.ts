import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBookNowButtonComponent } from './hotel-book-now-button.component';

describe('HotelBookNowButtonComponent', () => {
  let component: HotelBookNowButtonComponent;
  let fixture: ComponentFixture<HotelBookNowButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelBookNowButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HotelBookNowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
