import { AppState } from '../../../states/app.state';
import { createSelector } from '@ngrx/store';

export const hotelSelector = (state: AppState) => state.hotel;

export const selectHotelFilters = createSelector(
  hotelSelector,
  (state) => state.hotelFilters,
);
