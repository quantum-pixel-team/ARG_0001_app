import { Injectable } from '@angular/core';
import { Page } from '../../../shared/interfaces/page';
import { HttpClient } from '@angular/common/http';
import { HotelRoom } from '../interfaces/room';
import { HotelQueryParams } from '../interfaces/HotelFilters';

@Injectable({
  providedIn: 'root',
})
export class HotelHttpService {
  constructor(private http: HttpClient) {}

  fetchRooms(params: HotelQueryParams) {
    return this.http.post<Page<HotelRoom>>(`hotel/rooms/all`, params);
  }
}
