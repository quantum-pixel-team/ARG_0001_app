import { Component, OnInit } from '@angular/core';
import { HotelHttpService } from '../services/hotel-http.service';
import { HotelRoom } from '../interfaces/room';
import { DatePipe } from '@angular/common';
import { HotelFilters, HotelQueryParams } from '../interfaces/HotelFilters';

@Component({
  selector: 'app-hotel-reservation-container',
  templateUrl: './hotel-reservation-container.component.html',
  styleUrl: './hotel-reservation-container.component.scss',
})
export class HotelReservationContainerComponent implements OnInit {
  checkInDate: Date = new Date();
  checkOutDate: Date = this.addDays(new Date(), 1);
  queryParams: HotelQueryParams;
  hotelRooms: HotelRoom[] = [];

  constructor(private httpService: HotelHttpService) {
    this.queryParams = {
      pageIndex: 0,
      pageSize: 5,
      checkInDate: this.addDays(new Date(), 1),
      checkOutDate: this.addDays(new Date(), 2),
      numberOfRooms: 1,
      numberOfAdults: 1,
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
  }
  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  onCheckOutDateChanged($event: Date) {
    this.checkOutDate = $event;
    this.fetchRooms();
  }

  private fetchRooms() {
    this.hotelRooms = [];

    this.httpService.fetchRooms(this.queryParams).subscribe({
      next: (result) => {
        this.hotelRooms = result.content;
        console.table(this.hotelRooms);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onFiltersChanged(filters: HotelFilters) {
    this.queryParams.roomTypes = filters.roomTypes;
    this.queryParams.maxPrice = filters.maxPrice;
    this.queryParams.minPrice = filters.minPrice;
    this.queryParams.sort = filters.sortOrder;

    this.fetchRooms();
  }
}
