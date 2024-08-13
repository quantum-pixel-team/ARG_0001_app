import { Injectable } from '@angular/core';
import { Page } from '../../../shared/interfaces/page';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HotelRoom } from '../interfaces/room';
import { HotelQueryParams } from '../interfaces/HotelFilters';
import { RoomAvailability } from '../interfaces/RoomAvailability';

@Injectable({
  providedIn: 'root',
})
export class HotelHttpService {
  constructor(private http: HttpClient) {}

  fetchRooms(params: HotelQueryParams) {
    return this.http.post<Page<HotelRoom>>(`hotel/rooms/all`, params);
  }

  fetchRoomAvailimility(params: HttpParams) {
    return this.http.get<RoomAvailability[]>(`hotel/rooms/reservation`, {
      params: params,
    });
  }
}
