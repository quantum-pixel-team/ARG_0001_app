import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.scss',
  standalone: true,
  imports: [NgForOf, NgOptimizedImage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class RestaurantMenuComponent implements OnInit {
  menuList: string[] = [];

  ngOnInit(): void {
    const baseUrl = 'restaurant/menu/menu_restoranti_2025';
    for (let i = 2; i <= 6; i++) {
      this.menuList.push(`${baseUrl}-${i}.png`);
    }
  }
}
