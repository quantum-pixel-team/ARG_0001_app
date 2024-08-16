import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { HotelRoom } from '../../interfaces/room';
import { MatCardXlImage } from '@angular/material/card';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import {SharedModule} from "../../../../shared/modules/shared.module";

@Component({
  selector: 'app-hotel-room-card-images',
  standalone: true,
  imports: [MatCardXlImage, NgOptimizedImage, NgForOf, SharedModule],
  templateUrl: './hotel-room-card-images.component.html',
  styleUrl: './hotel-room-card-images.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HotelRoomCardImagesComponent {
  @Input() room!: HotelRoom;
  @Output() imageClicked = new EventEmitter();

  onElementVisible($event: boolean) {

  }
}
