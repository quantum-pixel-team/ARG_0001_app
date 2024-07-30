import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HotelRoom } from '../../interfaces/room';

@Component({
  selector: 'app-hotel-book-now-button',
  templateUrl: './hotel-book-now-button.component.html',
  styleUrl: './hotel-book-now-button.component.scss',
})
export class HotelBookNowButtonComponent {
  @Output() bookNowClicked = new EventEmitter();
  @Output() checkDatesClicked = new EventEmitter();
  @Input() isRomNotAvailable = true;
  @Input() romCapacityNotEnough = false;

  buttonCLicked() {
    if (this.isRomNotAvailable) {
      this.checkDatesClicked.emit();
      return;
    }
    if (!this.isRomNotAvailable) {
      this.bookNowClicked.emit();
      return;
    }
  }
}
