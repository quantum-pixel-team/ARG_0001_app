import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantMenuComponent } from '../restaurant-menu/restaurant-menu.component';
import { RestaurantReservationComponent } from '../restaurant-reservation/restaurant-reservation.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html',
  styleUrl: './restaurant-container.component.scss',
})
export class RestaurantContainerComponent implements OnInit {
  @ViewChild('menu', { static: false }) menuComponent!: RestaurantMenuComponent;
  @ViewChild('reservation', { static: false })
  reservationComponent!: RestaurantReservationComponent;

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
  ) {}

  ngOnInit(): void {
    const title = 'Aragosta Hotel & Restaurant - Restaurant';
    const ogTitle = 'Welcome to Aragosta Hotel & Restaurant in Durres  - Fine Dining Experience';
    this.titleService.setTitle(title);

    const keywords =
      'restaurant, Durres, fish, italian cuisine, local ingredients, restaurant reservations, book table, durres, restaurant, restaurants in durres,' +
      ' book table, restaurants near me,  restaurants nearby, aragosta hotel restaurant, italian restaurants durres, seafood, pizza, pizzeria, fish, etc';
    const description =
      'Welcome to Aragosta Hotel & Restaurant in Durres! Since 1995, savor the finest fish and Italian cuisine at our diverse restaurant.' +
      ' Book a table today to experience fine dining, excellent service, and a cozy atmosphere.';
    const ogDescription = 'Discover Aragosta Hotel & Restaurant delectable dishes made from the freshest local ingredients. ' +
      'Reserve a table and enjoy an unforgettable dining experience with us.';
    this.metaTagService.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      {
        property: 'og:image',
        content: 'https://aragosta-test.imgix.net/A19.jpg?format=compress&auto=format&w=1080',
      },
      { property: 'og:url', content: 'aragosta.al/restaurant' },
    ]);
  }

  scrollTo(el: HTMLDivElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
