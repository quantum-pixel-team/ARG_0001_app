import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-restaurant-reservation",
  templateUrl: "./restaurant-reservation.component.html",
  styleUrl: "./restaurant-reservation.component.scss",
  encapsulation: ViewEncapsulation.None
})
export class RestaurantReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  today: Date = new Date();

  ngOnInit() {
    this.reservationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      guests: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }
  bookTable() {
    if (this.reservationForm.valid) {
      console.log('Form Submitted', this.reservationForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
