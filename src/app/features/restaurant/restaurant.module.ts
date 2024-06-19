import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RestaurantContainerComponent} from './components/restaurant-container/restaurant-container.component';
import {RestaurantInfoComponent} from './components/restaurant-info/restaurant-info.component';
import {RestaurantStafComponent} from './components/restaurant-staf/restaurant-staf.component';
import {RestaurantSpecialityComponent} from './components/restaurant-speciality/restaurant-speciality.component';
import {RestaurantReservationComponent} from './components/restaurant-reservation/restaurant-reservation.component';
import {RestaurantCuisineComponent} from './components/restaurant-cuisine/restaurant-cuisine.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {RestaurantInfoDeviderComponent} from './components/restaurant-info-devider/restaurant-info-devider.component';
import {
  RestaurantSpecialityDeviderComponent
} from './components/restaurant-speciality-devider/restaurant-speciality-devider.component';
import {RestaurantMenuComponent} from './components/restaurant-menu/restaurant-menu.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from "@ngx-translate/core";
import {RestaurantRoutingModule} from './restaurant-routing.module';

@NgModule({
  declarations: [
    RestaurantContainerComponent,
    RestaurantInfoComponent,
    RestaurantStafComponent,
    RestaurantSpecialityComponent,
    RestaurantReservationComponent,
    RestaurantCuisineComponent,
    RestaurantInfoDeviderComponent,
    RestaurantSpecialityDeviderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    RestaurantMenuComponent,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MatIconModule,
    RestaurantRoutingModule,
    TranslateModule,
  ],
})
export class RestaurantModule {}
