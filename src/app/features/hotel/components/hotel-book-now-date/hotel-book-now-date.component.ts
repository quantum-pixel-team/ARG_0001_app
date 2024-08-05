import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-hotel-book-now-date',

  templateUrl: './hotel-book-now-date.component.html',
  styleUrl: './hotel-book-now-date.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelBookNowDateComponent  implements OnInit{
  dateRangeForm!: FormGroup;
  today: Date = new Date();
  tomorrow: Date = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate() + 1);

  @Output() checkInDate = new EventEmitter<Date>();
  @Output() checkOutDate = new EventEmitter<Date>();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.dateRangeForm = this.fb.group({
      checkInDate: [null, [Validators.required, this.dateValidator]],
      checkOutDate: [null, [Validators.required, this.dateValidator]]
    }, { validators: this.dateRangeValidator });

    this.dateRangeForm.get('checkInDate')?.valueChanges.subscribe((value) => {
      if (value) {
        this.today = new Date(value);
        this.checkInDate.emit(value);
      }
    });

    this.dateRangeForm.get('checkOutDate')?.valueChanges.subscribe((value) => {
      if (value) {
        this.checkOutDate.emit(value);
      }
    });
  }
  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const dateValue = new Date(control.value);

    return !isNaN(dateValue.getTime()) ? { invalidDate: true } : null;


  }

  dateRangeValidator(group: FormGroup): { [key: string]: boolean } | null {
    const start = group.controls['checkInDate'].value;
    const end = group.controls['checkOutDate'].value;
    return start && end && end > start ? null : { invalidDateRange: true };
  }

  unavailableDate(calendarDate:Date):boolean{
    const today = new Date();
    return calendarDate >= new Date(today.getFullYear(), today.getMonth(), today.getDate() )
  }
}
