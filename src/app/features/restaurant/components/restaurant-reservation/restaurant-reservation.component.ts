import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {DatePipe} from "@angular/common";
import {futureDateValidator, futureTimeValidator} from "../validators/restaurant-date-validators";

@Component({
  selector: "app-restaurant-reservation",
  templateUrl: "./restaurant-reservation.component.html",
  styleUrls: ["./restaurant-reservation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantReservationComponent implements OnInit {

  reservationForm!: FormGroup
  @ViewChild('messageTextArea') messageTextArea!: ElementRef;

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.reservationForm = this.fb.nonNullable.group(
      {
        name: ['', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z\s]+$/),
          Validators.minLength(2),
          Validators.maxLength(50)
        ]],
        email: ['', [Validators.required, Validators.email]],
        guests: ['', [Validators.min(1)]],
        date: ['', [
          Validators.required,
          futureDateValidator
        ]],
        time: ['', [
          Validators.required,
          futureTimeValidator
        ]],
        message: ['', Validators.maxLength(1500)]
      },{
        validators: this.futureDateTimeValidator.bind(this)
      });
  }

  today: Date = new Date();


  futureDateTimeValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(group.get('date')?.value);
    const selectedTime = group.get('time')?.value;
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(':');
      selectedDate.setHours(+hours, +minutes, 0);

      if (selectedDate < currentDate) {
        return { 'pastDateTime': true };
      }
    }
    return null;
  }

  bookTable() {
    if (this.reservationForm.valid) {
      const formValue = this.reservationForm.value;
      const phoneNumber = '+355683337050';

      // Format the date
      const formattedDate = this.datePipe.transform(formValue.date, 'MM/dd/yyyy');

      const whatsappMessage = `
      Restaurant Reservation:
        Name: ${formValue.name}
        Email: ${formValue.email}
        Guests: ${formValue.guests}
        Date: ${formattedDate}
        Time: ${formValue.time}
        Message: ${formValue.message || 'N/A'}
      `;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
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
