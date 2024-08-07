import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-room-book-now-button',
  templateUrl: './hotel-room-book-now-button.component.html',
  styleUrl: './hotel-room-book-now-button.component.scss',
})
export class HotelRoomBookNowButtonComponent {
  @Output() bookNowClicked = new EventEmitter();
  @Output() checkDatesClicked = new EventEmitter();
  @Input() roomNotAvailable = true;
  @Input() roomCapacityNotEnough = false;
  @Input() isStayDurationBelowMinNights!: boolean;
  @Input() notAvailableLabel: string | undefined;

  buttonCLicked() {
    if (this.roomNotAvailable) {
      this.checkDatesClicked.emit();
      return;
    }
    if (!this.roomNotAvailable) {
      this.bookNowClicked.emit();
    }
  }
}
