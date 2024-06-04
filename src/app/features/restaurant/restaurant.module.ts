import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantContainerComponent} from './components/restaurant-container/restaurant-container.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [RestaurantContainerComponent],
  imports: [CommonModule, TranslateModule],
})
export class RestaurantModule {}
