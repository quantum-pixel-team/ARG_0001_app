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
  @Input() childrenAges!: number[];

  onBookNowClick(room: HotelRoom) {
    open(room.bookNowUrl, '_BLANK');
  }

  isRoomCapacityNotEnough(room: HotelRoom) {
    const guests =
      this.numberOfAdults + this.childrenAges.filter((age) => age > 6).length;
    return guests > room.totalCapacity;
  }

  isRoomNotAvailable(room: HotelRoom) {
    return this.numberOfRequestedRooms > room.availableRooms;
  }
}
