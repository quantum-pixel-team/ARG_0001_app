import { Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.component.html',
  styleUrl: './hotel-check-in.component.scss',

})
export class HotelCheckInComponent {
  @Output() checkInDate = new EventEmitter<Date>();
  @Output() checkOutDate = new EventEmitter<Date>();

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
