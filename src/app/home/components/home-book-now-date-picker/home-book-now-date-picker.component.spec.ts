import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookNowDatePickerComponent } from './home-book-now-date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeBookNowDatePickerComponent', () => {
  let component: HomeBookNowDatePickerComponent;
  let fixture: ComponentFixture<HomeBookNowDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeBookNowDatePickerComponent],
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        MatInputModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBookNowDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
