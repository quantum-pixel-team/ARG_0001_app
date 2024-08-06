import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  ViewChild,
} from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { HotelRoom } from '../../interfaces/room';
import Swiper from 'swiper';

@Component({
  selector: 'app-hotel-room-details-images',
  standalone: true,
  imports: [NgForOf, NgOptimizedImage],
  templateUrl: './hotel-room-details-images.component.html',
  styleUrl: './hotel-room-details-images.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HotelRoomDetailsImagesComponent implements AfterViewInit {
  @Input() room!: HotelRoom;
  @ViewChild('swiper', { static: false }) swiperRef: any;
  swiper: Swiper | undefined;

  ngAfterViewInit() {
    this.initializeSwiper();
  }

  initializeSwiper(): void {
    const swiperEl = this.swiperRef.nativeElement;
    Object.assign(swiperEl, {
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      navigation: true,
    });
    swiperEl.initialize();
  }
}
