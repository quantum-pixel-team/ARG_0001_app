import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hotel-book-now-date',

  templateUrl: './hotel-book-now-date.component.html',
  styleUrl: './hotel-book-now-date.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class HotelBookNowDateComponent {
  minDate: Date=new Date();
  minDate1: Date=new Date();
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
