import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-hotel-book-now-date',

  templateUrl: './hotel-book-now-date.component.html',
  styleUrl: './hotel-book-now-date.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelBookNowDateComponent {
  range = new FormGroup({
    checkInDate: new FormControl<Date | null>(null),
    checkOutDate: new FormControl<Date | null>(null),
  });
  minDate: Date = new Date();
  minCheckOutDate: Date = new Date();

  @Output() checkInDate = new EventEmitter<Date>();
  @Output() checkOutDate = new EventEmitter<Date>();

  constructor() {
    this.range.get('checkInDate')?.valueChanges.subscribe((value) => {
      if (value) {
        this.minCheckOutDate = new Date(value);
        this.checkInDate.emit(value);
      }
    });

    this.range.get('checkOutDate')?.valueChanges.subscribe((value) => {
      if (value) {
        this.checkOutDate.emit(value);
      }
    });
  }
}
