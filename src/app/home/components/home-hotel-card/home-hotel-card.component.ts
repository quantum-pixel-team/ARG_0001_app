import { Component, EventEmitter, Input, Output } from '@angular/core';
import {HotelRoom} from "../../../features/hotel/interfaces/room";

@Component({
  selector: 'app-home-hotel-card',
  templateUrl: './home-hotel-card.component.html',
  styleUrl: './home-hotel-card.component.scss',
})
export class HomeHotelCardComponent {
  @Input() room: HotelRoom | undefined;
  @Output() bookNowClicked = new EventEmitter();
}
