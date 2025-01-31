import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-date-button',
  templateUrl: './hotel-date-button.component.html',
  styleUrl: './hotel-date-button.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelDateButtonComponent implements OnInit {
  dateRangeFormDesktop!: FormGroup;
  today: Date = new Date();
  tomorrow: Date = new Date(
    this.today.getFullYear(),
    this.today.getMonth(),
    this.today.getDate() + 1,
  );

  @Output() checkInDateChange = new EventEmitter<Date>();
  @Output() checkOutDateChange = new EventEmitter<Date>();
  @Input() checkInDate!: Date;
  @Input() checkOutDate!: Date;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dateRangeFormDesktop = this.fb.group({
      checkInDateDesktop: [this.checkInDate, [Validators.required]],
      checkOutDateDesktop: [this.checkOutDate, [Validators.required]],
    });

    this.dateRangeFormDesktop
      .get('checkInDateDesktop')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          const date = new Date(value);
          date.setHours(10);
          this.today = date;
          this.checkInDateChange.emit(date);
        }
      });

    this.dateRangeFormDesktop
      .get('checkOutDateDesktop')
      ?.valueChanges.subscribe((value) => {
        if (value) {
          const date = new Date(value);
          date.setHours(10);
          this.checkOutDateChange.emit(date);
        }
      });
  }

  unavailableDate(calendarDate: Date): boolean {
    const today = new Date();
    return (
      calendarDate >=
      new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
  }
}
