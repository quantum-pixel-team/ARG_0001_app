import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.component.html',
  styleUrl: './hotel-check-in.component.scss',

})
export class HotelCheckInComponent {

  minDate: Date=new Date();
  minDate1: Date=new Date();

  adults = 0;
  children = 0;
  rooms = 0;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onQuantityChange(quantity: number, type: string) {
    switch (type) {
      case 'adults':
        this.adults = quantity;
        break;
      case 'children':
        this.children = quantity;
        break;
      case 'rooms':
        this.rooms = quantity;
        break;
      default:
        break;
    }
  }
}
