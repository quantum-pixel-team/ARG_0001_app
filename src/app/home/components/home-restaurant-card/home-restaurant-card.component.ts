import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../../interfaces/menu-item';

@Component({
  selector: 'app-home-restaurant-card',
  templateUrl: './home-restaurant-card.component.html',
  styleUrl: './home-restaurant-card.component.scss',
})
export class HomeRestaurantCardComponent {
  @Input() price = 0.0;
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() isMobileWidth$!: Observable<boolean>;
  @Input() xSmallWidth$!: Observable<boolean>;
  @Output() cardClicked = new EventEmitter<MenuItem>();
}
