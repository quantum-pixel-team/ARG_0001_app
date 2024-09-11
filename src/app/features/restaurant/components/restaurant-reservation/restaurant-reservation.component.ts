import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import {
  futureDateValidator,
  futureTimeValidator, minMaxTimeValidator,
} from '../validators/restaurant-date-validators';
import { RestaurantHttpService } from '../../services/restaurant-http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { minDateRequired } from '../../../conference/validators/date-format.validators';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-restaurant-reservation',
  templateUrl: './restaurant-reservation.component.html',
  styleUrls: ['./restaurant-reservation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RestaurantReservationComponent implements OnInit {
  reservationForm!: FormGroup;

  @ViewChild('messageTextArea') messageTextArea!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private restaurantHttpService: RestaurantHttpService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.fb.nonNullable.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]+$/),
            Validators.minLength(2),
            Validators.maxLength(50),
          ],
        ],
        phoneNumber: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
            ),
          ],
        ],
        guests: ['', [Validators.min(1), Validators.pattern('^[0-9]*$')]],
        date: ['', [Validators.required, futureDateValidator, minDateRequired]],
        time: ['', [Validators.required, futureTimeValidator, minMaxTimeValidator]],
        message: ['', Validators.maxLength(1500)],
      },
      {
        validators: this.futureDateTimeValidator.bind(this),
      },
    );
  }

  today: Date = new Date();

  futureDateTimeValidator(
    group: AbstractControl,
  ): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(group.get('date')?.value);
    const selectedTime = group.get('time')?.value;
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':');
      selectedDate.setHours(+hours, +minutes, 0);

      if (selectedDate < currentDate) {
        return { pastDateTime: true };
      }
    }
    return null;
  }

  bookTable() {
    if (this.reservationForm.valid) {
      const formValue = this.reservationForm.value;
      const [hours, minutes] = formValue.time.split(':');
      const time = new Date(formValue.date);
      time.setHours(hours);
      time.setMinutes(minutes);
      this.restaurantHttpService
        .sendMessage({
          name: formValue.name,
          phoneNumber: formValue.phoneNumber,
          guests: formValue.guests,
          date: formValue.date,
          time: time.toISOString().split('T')[1],
          message: formValue.message,
          languageCode: 'sq',
          to: environment.contactPhoneNumber,
        })
        .subscribe({
          next: () => {

            this._snackBar.open('Reservation send successfully.', 'ok', {
              duration: 4_000,
            });
            this.reservationForm.reset();
          },
          error: (error) => {
            this._snackBar.open('Something went wrong.', 'ok', {
              duration: 4_000,
            });
            console.debug(error);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }

  protected primary: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#de4a1c',
    },
    dial: {
      dialBackgroundColor: '#de4a1c',
    },
    clockFace: {
      clockFaceBackgroundColor: '#F5E1CA',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#de4a1c',
    },
  };

  adjustTextareaHeight(): void {
    const textarea = this.messageTextArea.nativeElement;
    const maxHeight = 300; // Maximum height in pixels
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
    if (textarea.scrollHeight > maxHeight) {
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  }
}
