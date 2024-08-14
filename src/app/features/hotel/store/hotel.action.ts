import { createAction, props } from '@ngrx/store';
import { BookNowFilters } from '../interfaces/HotelFilters';

export const changeBookNowFilter = createAction(
  '[Hotel Component] changeFilter',
  props<{ bookNowFilters: BookNowFilters }>(),
);
