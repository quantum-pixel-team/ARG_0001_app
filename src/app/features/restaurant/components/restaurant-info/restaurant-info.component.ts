import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrl: './restaurant-info.component.scss',
})
export class RestaurantInfoComponent {
  @Output() bookNowClicked = new EventEmitter();
  @Output() seeMenuClicked = new EventEmitter();
}
