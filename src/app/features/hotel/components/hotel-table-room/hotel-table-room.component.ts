import { Component, Input } from "@angular/core";
import { HotelRoom } from "../../interfaces/room";

@Component({
  selector: 'app-hotel-table-room',
  templateUrl: './hotel-table-room.component.html',
  styleUrl: './hotel-table-room.component.scss'
})
export class HotelTableRoomComponent {
  @Input() hotelRooms!: HotelRoom[];

  onBookNowClick(room: HotelRoom) {
    open(room.bookNowUrl,"_BLANK");
  }
}
