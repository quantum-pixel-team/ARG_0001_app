import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookNowFilters } from '../../interfaces/HotelFilters';

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.component.html',
  styleUrl: './hotel-check-in.component.scss',
})
export class HotelCheckInComponent {
  @Output() $bookNowFiltersEvent = new EventEmitter<BookNowFilters>();

  bookNowFiltersEvent: BookNowFilters;

  constructor() {
    this.bookNowFiltersEvent = {
      numberOfRooms: 1,
      numberOfAdults: 1,
      numberOfChildren: 0,
      checkInDate: new Date(),
      checkOutDate: new Date(),
    };
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  onQuantityChange(quantity: number, type: string) {
    switch (type) {
      case 'adults':
        this.bookNowFiltersEvent.numberOfAdults = quantity;
        break;
      case 'children':
        this.bookNowFiltersEvent.numberOfChildren = quantity;
        break;
      case 'rooms':
        this.bookNowFiltersEvent.numberOfRooms = quantity;
        break;
      default:
        break;
    }
  }

  onCheckInClicked() {
    console.table(this.bookNowFiltersEvent)
    this.$bookNowFiltersEvent.emit(this.bookNowFiltersEvent);
  }

  onCheckInChanged($event: Date) {
    console.log("Check-in")
    console.log($event)
    this.bookNowFiltersEvent.checkInDate = $event
  }

  onCHeckOutChanged($event: Date) {
    console.log("Check-out")
    console.log($event)
    this.bookNowFiltersEvent.checkOutDate = $event
  }
}
