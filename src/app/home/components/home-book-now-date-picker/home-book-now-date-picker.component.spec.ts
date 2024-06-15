import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookNowDatePickerComponent } from './home-book-now-date-picker.component';

describe('HomeBookNowDatePickerComponent', () => {
  let component: HomeBookNowDatePickerComponent;
  let fixture: ComponentFixture<HomeBookNowDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBookNowDatePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBookNowDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
