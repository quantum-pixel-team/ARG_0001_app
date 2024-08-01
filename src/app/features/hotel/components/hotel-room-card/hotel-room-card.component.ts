import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HotelRoom } from "../../interfaces/room";

@Component({
  selector: 'app-hotel-room-card',
  templateUrl: './hotel-room-card.component.html',
  styleUrl: './hotel-room-card.component.scss'
})
export class HotelRoomCardComponent {
  @Input() room!: HotelRoom;
  @Output() bookNowClicked = new EventEmitter<HotelRoom>();
  @Output() checkDatesClicked = new EventEmitter<HotelRoom>();
  @Input() roomNotAvailable = true;
  @Input() roomCapacityNotEnough = false;

}
