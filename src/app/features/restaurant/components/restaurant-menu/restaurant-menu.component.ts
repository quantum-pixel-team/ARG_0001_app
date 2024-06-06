import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { lPad } from '../../../../shared/utils/numbers';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrl: './restaurant-menu.component.scss',
  standalone: true,
  imports: [NgForOf],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class RestaurantMenuComponent implements OnInit {
  menuList: string[] = [];

  ngOnInit(): void {
    const baseUrl = 'assets/menu/Aragosta-Menu';
    for (let i = 1; i <= 11; i++) {
      this.menuList.push(`${baseUrl}-${lPad(i)}.png`);
    }
  }
}
