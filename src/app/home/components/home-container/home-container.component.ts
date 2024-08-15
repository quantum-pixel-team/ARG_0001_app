import { Component, OnInit } from '@angular/core';
import { CommonServices } from '../../../shared/services/common.services';
import { BookNowFilters } from '../../../features/hotel/interfaces/HotelFilters';
import { Observable } from 'rxjs';
import { AppState } from '../../../states/app.state';
import { Store } from '@ngrx/store';

import * as HotelSelector from '../../../features/hotel/store/hotel.selector';
import * as HotelAction from '../../../features/hotel/store/hotel.action';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent implements OnInit {
  bookNowFilters$: Observable<BookNowFilters>;

  constructor(
    private commonService: CommonServices,
    private store: Store<AppState>,
    private router: Router,
    private titleService: Title,
    private metaTagService: Meta,
  ) {
    this.bookNowFilters$ = store.select(HotelSelector.selectHotelFilters);
  }

  onLocationClicked() {
    this.commonService.navigateToArgLocation();
  }

  onBookNowFilterChanged(bookNowFilters: BookNowFilters) {
    this.store.dispatch(HotelAction.changeBookNowFilter({ bookNowFilters }));

    this.router.navigate(['hotel']).then((r) => r);
  }

  ngOnInit(): void {
    const title = 'Welcome to Aragosta Hotel & Restaurant in Durres';

    this.titleService.setTitle(title);

    const keywords =
      'Hotel, Durres, Serives, Restaurant, book, free parking, private beach, relaxing dining, conferece room, modern amenities,' +
      'hotels, durres, restaurant, beach, hotel durres, booking, hotels near me,' +
      'cheap hotels, aragosta hotel, hotel rooms, booking hotel, hotels in durres, hotel near beach, etc';
    const description =
      'Welcome to Aragosta Hotel & Restaurant in Durres! Enjoy luxurious rooms, free parking, private beach access,' +
      ' relaxing dining, conferece room,modern amenities and Free Wi-Fi. Explore our services, reserve a room, and experience the best in hospitality.';
    const ogDescription =
      'Enjoy luxurious rooms, free parking, private beach access, relaxing dining, conferece room,modern' +
      'amenities and Free Wi-Fi. Explore our services, reserve a room, and experience the best in hospitality.';
    this.metaTagService.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: ogDescription },
      { property: 'og:image', content:'https://aragosta-test.imgix.net/A1.jpg?auto=format&w=1200'},
      { property: 'og:url', content: "aragosta.al"},
    ]);
  }
}
