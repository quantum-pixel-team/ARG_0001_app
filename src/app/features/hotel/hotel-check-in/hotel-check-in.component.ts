import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.component.html',
  styleUrl: './hotel-check-in.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelCheckInComponent {

  minDate: Date=new Date();
  minDate1: Date=new Date();

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
