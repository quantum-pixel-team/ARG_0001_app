import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHotelCardComponent } from './home-hotel-card.component';

describe('HomeHotelCardComponent', () => {
  let component: HomeHotelCardComponent;
  let fixture: ComponentFixture<HomeHotelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHotelCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeHotelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
