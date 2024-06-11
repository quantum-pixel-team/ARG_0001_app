import { Component, ElementRef, ViewChild } from '@angular/core';
import { RestaurantMenuComponent } from '../restaurant-menu/restaurant-menu.component';
import { RestaurantReservationComponent } from '../restaurant-reservation/restaurant-reservation.component';

@Component({
  selector: 'app-restaurant-container',
  templateUrl: './restaurant-container.component.html',
  styleUrl: './restaurant-container.component.scss',
})
export class RestaurantContainerComponent {
  @ViewChild('menu', { static: false }) menuComponent!: RestaurantMenuComponent;
  @ViewChild('reservation', { static: false })
  reservationComponent!: RestaurantReservationComponent;

  scrollTo(el: HTMLDivElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
