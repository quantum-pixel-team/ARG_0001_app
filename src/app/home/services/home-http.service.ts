import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

import { Router } from '@angular/router';
import { HotelHttpService } from '../../features/hotel/services/hotel-http.service';
import { HotelQueryParams } from '../../features/hotel/interfaces/HotelFilters';
import { LanguageService } from '../../shared/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class HomeHttpService {
  private queryParams: HotelQueryParams;

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  constructor(
    private router: Router,
    private roomsHttpService: HotelHttpService,
    readonly languageService: LanguageService,
  ) {
    this.queryParams = {
      pageIndex: 0,
      pageSize: 5,
      checkInDate: this.addDays(new Date(), 1),
      checkOutDate: this.addDays(new Date(), 2),
      numberOfRooms: 1,
      numberOfAdults: 1,
      available: false,
      language: languageService.currentLang,
      childrenAges: [],
      roomTypes: [
        'Double Room',
        'Standard Double or Twin Room',
        'Superior Double Room',
        'Junior Suite with Sea View',
        'Deluxe Suite with Sea View',
      ],
      minPrice: null,
      maxPrice: null,
      roomFacilities: [],
      sort: 'DESC',
    };
  }

  getTopMenu(): MenuItem[] {
    return [
      {
        id: 1,
        title: 'Seafood Salad',
        price: 1000,
        imageUrl: 'seafood_salad.jpeg',
      },
      {
        id: 2,
        title: 'Linguini with seafood',
        price: 950,
        imageUrl: 'linguini_with_seafood.jpeg',
      },
      {
        id: 3,
        title: 'Pizza Deliziosa',
        price: 750,
        imageUrl: 'rizza_deliziosa.jpeg',
      },
      {
        id: 4,
        title: 'Grilled Chicken Fillet',
        price: 750,
        imageUrl: 'grilled_chicken_fillet.jpeg',
      },
    ];
  }

  getTopDesserts(): MenuItem[] {
    return [
      {
        id: 5,
        title: 'Grilled Sea Bass',
        price: 1200,
        imageUrl: 'grilled_sea_bass.jpeg',
      },
      {
        id: 6,
        title: 'Grilled Salmon',
        price: 1200,
        imageUrl: 'grilled_salmon.jpeg',
      },
    ];
  }

  fetchTopRooms() {
    return this.roomsHttpService.fetchRooms({
      ...this.queryParams,
      language: this.languageService.currentLang,
    });
  }

  fetchRestaurantMenuItem(item: MenuItem) {
    this.fetchRestaurantMenu();
  }

  fetchRestaurantMenu() {
    this.router.navigate([`/restaurant`]);
  }

  navigateToArgLocation() {
    open('https://maps.app.goo.gl/9prZ1wKksVvmixwE7');
  }
}
