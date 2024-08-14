import { Component } from '@angular/core';
import { CommonServices } from '../../../shared/services/common.services';
import { BookNowFilters } from '../../../features/hotel/interfaces/HotelFilters';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { Store } from '@ngrx/store';

import * as HotelSelector from '../../../features/hotel/store/hotel.selector';
import * as HotelAction from '../../../features/hotel/store/hotel.action';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent {
  bookNowFilters$: Observable<BookNowFilters>;

  constructor(
    private commonService: CommonServices,
    private store: Store<AppState>,
    private router:Router
  ) {
    this.bookNowFilters$ = store.select(HotelSelector.selectHotelFilters);
    console.log(
      'Initial State:',
      this.store.select(HotelSelector.selectHotelFilters),
    );
  }

  onLocationClicked() {
    this.commonService.navigateToArgLocation();
  }

  onBookNowFilterChanged(bookNowFilters: BookNowFilters) {
    this.store.dispatch(HotelAction.changeBookNowFilter({ bookNowFilters }));

    this.router.navigate(['hotel']).then(r => r)
  }
}
