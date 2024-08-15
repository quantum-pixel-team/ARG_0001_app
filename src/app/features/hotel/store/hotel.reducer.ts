import { BookNowFilters, HotelQueryParams } from '../interfaces/HotelFilters';
import { createReducer, on } from '@ngrx/store';
import * as HotelAction from './hotel.action';
import { addDays } from '../../../shared/utils/DateTime';

export interface HotelState {
  hotelFilters: BookNowFilters;
}

export const initialHotelState: HotelState = {
  hotelFilters: {
    numberOfRooms: 1,
    numberOfAdults: 1,
    numberOfChildren: 0,
    checkInDate: addDays(new Date(), 1),
    checkOutDate: addDays(new Date(), 2),
    childrenAges: [],
  },
};
export const hotelReducer = createReducer(
  initialHotelState,
  on(
    HotelAction.changeBookNowFilter,
    (state, { bookNowFilters }): HotelState => ({
      ...state,
      hotelFilters: bookNowFilters,
    }),
  ),
);
