import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

import { Router } from '@angular/router';
import { HotelHttpService } from '../../features/hotel/services/hotel-http.service';
import { HotelQueryParams } from '../../features/hotel/interfaces/HotelFilters';
import { LanguageService } from '../../shared/services/language.service';
import { HotelRoom } from '../../features/hotel/interfaces/room';

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
      roomTypes: ["Double Room","Standard Double or Twin Room","Superior Double Room","Junior Suite with Sea View","Deluxe Suite with Sea View"],
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
        price: 9,
        imageUrl:
          'https://th.bing.com/th/id/OIG1.JMCrZ6IhMIEeJd4u5686?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        id: 2,
        title: 'Linguini with seafood',
        price: 8.5,
        imageUrl:
          'https://th.bing.com/th/id/OIG4.WPF_t2ZMBEh9uMn4403Y?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        id: 3,
        title: 'Pizza Deliziosa',
        price: 7.5,
        imageUrl:
          'https://th.bing.com/th/id/OIG4.ul.4RPIFeXpEdWactxgj?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        id: 4,
        title: 'Grilled Chicken Fillet',
        price: 7,
        imageUrl:
          'https://th.bing.com/th/id/OIG1.ILb4SLQaG8VZJ6nKRbzt?w=150&h=150&rs=1&pid=ImgDetMain',
      },
    ];
  }

  getTopDesserts(): MenuItem[] {
    return [
      {
        id: 5,
        title: 'Grilled Sea Bass',
        price: 12,
        imageUrl:
          'https://th.bing.com/th/id/OIG3.y8zYn77zjXAhUzsk0nUY?w=150&h=150&rs=1&pid=ImgDetMain',
      },
      {
        id: 6,
        title: 'Grilled Salmon',
        price: 12,
        imageUrl:
          'https://th.bing.com/th/id/OIG3.wWRVYXFNrEtP__yIUmks?w=150&h=150&rs=1&pid=ImgDetMain',
      },
    ];
  }

  fetchTopRooms() {
    return this.roomsHttpService.fetchRooms(this.queryParams);
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
