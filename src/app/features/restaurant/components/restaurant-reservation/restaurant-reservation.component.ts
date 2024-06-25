import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgxMaterialTimepickerTheme } from "ngx-material-timepicker";
import { DatePipe } from "@angular/common";
import { futureDateValidator, futureTimeValidator } from "../validators/restaurant-date-validators";
import { RestaurantHttpService } from "../../services/restaurant-http.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-restaurant-reservation",
  templateUrl: "./restaurant-reservation.component.html",
  styleUrls: ["./restaurant-reservation.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RestaurantReservationComponent implements OnInit {
  reservationForm!: FormGroup;


  @ViewChild("messageTextArea") messageTextArea!: ElementRef;

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private restaurantHttpService: RestaurantHttpService,
    private _snackBar: MatSnackBar,

  ) {
  }

  ngOnInit(): void {
    this.reservationForm = this.fb.nonNullable.group(
      {
        name: [
          "",
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z\s]+$/),
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        phoneNumber: ["", [Validators.required]],
        guests: ["", [Validators.min(1)]],
        date: ["", [Validators.required, futureDateValidator]],
        time: ["", [Validators.required, futureTimeValidator]],
        message: ["", Validators.maxLength(1500)]
      },
      {
        validators: this.futureDateTimeValidator.bind(this)
      }
    );
  }

  today: Date = new Date();

  futureDateTimeValidator(
    group: AbstractControl
  ): { [key: string]: boolean } | null {
    const currentDate = new Date();
    const selectedDate = new Date(group.get("date")?.value);
    const selectedTime = group.get("time")?.value;
    if (selectedDate && selectedTime) {
      const [hours, minutes] = selectedTime.split(":");
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

      this.restaurantHttpService.sendMessage({name: formValue.name,
        phoneNumber: formValue.phoneNumber,
        guests: formValue.guests,
        date: formValue.date,
        time: formValue.time,
        message: formValue.message,
        languageCode: 'sq',
        to: `+355676923049`
      }).subscribe({
        next: () => this._snackBar.open("Reservation send successfully.", "ok", { duration: 3_000 }),
        error: error => {this._snackBar.open("Something went wrong.", "ok", { duration: 3_000 }); console.log(error)}
      })

    } else {
      console.log("Form is invalid");
    }
  }

  protected primary: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: "#fff",
      buttonColor: "#de4a1c"
    },
    dial: {
      dialBackgroundColor: "#de4a1c"
    },
    clockFace: {
      clockFaceBackgroundColor: "#F5E1CA",
      clockHandColor: "#9fbd90",
      clockFaceTimeInactiveColor: "#de4a1c"
    }
  };

  adjustTextareaHeight(): void {
    const textarea = this.messageTextArea.nativeElement;
    const maxHeight = 300; // Maximum height in pixels
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
    if (textarea.scrollHeight > maxHeight) {
      textarea.style.overflowY = "auto";
    } else {
      textarea.style.overflowY = "hidden";
    }
  }
}
