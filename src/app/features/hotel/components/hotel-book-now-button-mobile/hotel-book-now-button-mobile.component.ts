import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hotel-book-now-button-mobile',

  templateUrl: './hotel-book-now-button-mobile.component.html',
  styleUrl: './hotel-book-now-button-mobile.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelBookNowButtonMobileComponent implements OnInit{
  dateRangeForms!: FormGroup;
  today: Date = new Date();
  tomorrow: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1);

  @Output() checkInDateMobile = new EventEmitter<Date>();
  @Output() checkOutDateMobile = new EventEmitter<Date>();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.dateRangeForms = this.fb.group({
      checkInDateMobile: [null, [Validators.required, this.dateValidator]],
      checkOutDateMobile: [null, [Validators.required, this.dateValidator]]
    }, );

    this.dateRangeForms.get('checkInDateMobile')?.valueChanges.subscribe((value) => {
      console.log(value)

      if (value) {
        this.checkInDateMobile.emit(value);
      }
    });

    this.dateRangeForms.get('checkOutDateMobile')?.valueChanges.subscribe((value) => {
      if (value) {
        this.checkOutDateMobile.emit(value);
      }
    });
  }
  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const dateValue = new Date(control.value);
    return !isNaN(dateValue.getTime()) ? { invalidDate: true } : null;

  }

  // dateRangeValidator(group: FormGroup): { [key: string]: boolean } | null {
  //   const start = group.controls['checkInDate'].value;
  //   const end = group.controls['checkOutDate'].value;
  //   return start && end && end > start ? null : { invalidDateRange: true };
  // }

  unavailableDate(calendarDate:Date):boolean{
    const today = new Date();
    return calendarDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate() )
  }
}
