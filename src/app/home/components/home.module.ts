import { NgModule } from '@angular/core';
import { HomeBookNowComponent } from './home-book-now/home-book-now.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { BookNowOptionRowComponent } from './book-now-option-row/book-now-option-row.component';
import { MatCardModule } from '@angular/material/card';
import { HomeRestaurantComponent } from './home-restaurant/home-restaurant.component';
import { HomeRestaurantCardComponent } from './home-restaurant-card/home-restaurant-card.component';
import { HomeImageComponent } from './home-image/home-image.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeBookNowComponent,
    BookNowOptionRowComponent,
    HomeRestaurantComponent,
    HomeRestaurantCardComponent,
  ],
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    DatePipe,
    MatMenuModule,
    MatDividerModule,
    NgIf,
    AsyncPipe,
    NgClass,
    MatCardModule,
    NgForOf,
    NgOptimizedImage,
    HomeImageComponent,
    WelcomePageComponent,
  ],
})
export class HomeModule {}
