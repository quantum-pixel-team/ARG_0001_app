import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA, ElementRef,
  EventEmitter,
  Input,
  Output, ViewChild
} from "@angular/core";
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
export class HotelRoomCardImagesComponent implements AfterViewInit {
  @Input() room!: HotelRoom;
  @Output() imageClicked = new EventEmitter();
  @ViewChild('imageElement') imageElement!: ElementRef;
  isInView = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isInView = true;
          observer.unobserve(this.imageElement.nativeElement);
        }
      });
    });

    observer.observe(this.imageElement.nativeElement);
  }

  getSmallImage(imageUrl: string) {
    const extensionIndex = imageUrl.lastIndexOf('.');
    return `${imageUrl.substring(0, extensionIndex)}-ratio-0_89${imageUrl.substring(extensionIndex)}`;
  }
}
