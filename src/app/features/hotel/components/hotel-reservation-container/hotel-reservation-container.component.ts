import { Component, OnInit } from '@angular/core';
import { HotelHttpService } from '../../services/hotel-http.service';
import { HotelRoom } from '../../interfaces/room';
import {
  BookNowFilters,
  HotelFilters,
  HotelQueryParams,
} from '../../interfaces/HotelFilters';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hotel-reservation-container',
  templateUrl: './hotel-reservation-container.component.html',
  styleUrl: './hotel-reservation-container.component.scss',
})
export class HotelReservationContainerComponent implements OnInit {
  queryParams: HotelQueryParams;
  hotelRooms: HotelRoom[] = [];
  error: any;

  constructor(
    private httpService: HotelHttpService,
    readonly translateService: TranslateService,
  ) {
    this.queryParams = {
      pageIndex: 0,
      pageSize: 20,
      checkInDate: this.addDays(new Date(), 1),
      checkOutDate: this.addDays(new Date(), 2),
      numberOfRooms: 1,
      numberOfAdults: 1,
      available: false,
      language: 'en',
      childrenAges: [],
      roomTypes: [],
      minPrice: null,
      maxPrice: null,
      roomFacilities: [],
      sort: 'ASC',
    };
  }

  ngOnInit(): void {
    this.fetchRooms();
    this.translateService.onLangChange.subscribe((event) => {
      this.queryParams.language = event.lang;
      this.fetchRooms();
    });
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  private fetchRooms() {
    this.hotelRooms = [];

    this.httpService.fetchRooms(this.queryParams).subscribe({
      next: (result) => {
        this.hotelRooms = result.content;
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  onFiltersChanged(filters: HotelFilters) {
    this.queryParams.roomTypes = filters.roomTypes;
    this.queryParams.maxPrice = filters.maxPrice;
    this.queryParams.minPrice = filters.minPrice;
    this.queryParams.sort = filters.sortOrder;
    this.queryParams.available = filters.available;

    this.fetchRooms();
  }

  onPersonFilterChanged(filter: BookNowFilters) {
    this.queryParams.checkInDate = filter.checkInDate;
    this.queryParams.checkOutDate = filter.checkOutDate;
    this.queryParams.numberOfAdults = filter.numberOfAdults;
    this.queryParams.numberOfRooms = filter.numberOfRooms;
    this.fetchRooms();
  }
}
