import { Component, Input } from '@angular/core';
import { HotelRoom } from '../../interfaces/room';

@Component({
  selector: 'app-hotel-room-table',
  templateUrl: './hotel-room-table.component.html',
  styleUrl: './hotel-room-table.component.scss',
})
export class HotelTableRoomComponent {
  @Input() hotelRooms!: HotelRoom[];
  @Input() numberOfAdults!: number;
  @Input() numberOfRequestedRooms!: number;
  @Input() numberOfRequestedNights!: number;
  @Input() childrenAges: number[] = [];

  onBookNowClick(room: HotelRoom) {
    open(room.bookNowUrl, '_BLANK');
  }

  isRoomCapacityNotEnough(room: HotelRoom) {
    const guests =
      this.numberOfAdults + (this.childrenAges?.filter((age) => age > 6).length | 0);
    return guests > room.totalCapacity;
  }

  isRoomNotAvailable(room: HotelRoom) {
    return this.numberOfRequestedRooms > room.availableRooms || this.isStayDurationBelowMinNights(room);
  }
  isStayDurationBelowMinNights(room: HotelRoom) {
    return this.numberOfRequestedNights < room.minimumNights;
  }

  getNotAvailableLabel(room: HotelRoom) {
    if (this.isRoomNotAvailable(room)) return 'No more rooms';
    if (this.isStayDurationBelowMinNights(room))
      return `Minimum nights ${room.minimumNights}`;
    return undefined;
  }
}
