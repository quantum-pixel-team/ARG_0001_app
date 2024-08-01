import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe, NgOptimizedImage } from "@angular/common";
import { HotelReservationContainerComponent } from './components/hotel-reservation-container/hotel-reservation-container.component';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './components/book-now/book-now.component';
import { HotelCheckInComponent } from './components/hotel-check-in/hotel-check-in.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatDatepickerInput,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenu, MatMenuTrigger } from "@angular/material/menu";
import { HotelTableRoomComponent } from './components/hotel-room-table/hotel-room-table.component';
import { HotelRoomCardComponent } from './components/hotel-room-card/hotel-room-card.component';
import { MatCardModule } from '@angular/material/card';
import { HotelFiltersComponent } from './components/hotel-filters/hotel-filters.component';
import { MatRippleModule } from '@angular/material/core';
import { HotelRoomBookNowButtonComponent } from './components/hotel-room-book-now-button/hotel-room-book-now-button.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { HomeEventsCardComponent } from "../../home/components/home-events-card/home-events-card.component";
import { HotelRoomCardImagesComponent } from "./components/hotel-room-card-images/hotel-room-card-images.component";
import { HotelBookNowDateComponent } from "./components/hotel-book-now-date/hotel-book-now-date.component";
import { HomeModule } from "../../home/components/home.module";
import { MatDivider } from "@angular/material/divider";

const routes: Routes = [
  {
    path: '',
    component: HotelReservationContainerComponent,
  },
];

@NgModule({
  declarations: [
    HotelReservationContainerComponent,
    BookNowComponent,
    HotelCheckInComponent,
    HotelBookNowDateComponent,
    HotelTableRoomComponent,
    HotelRoomCardComponent,
    HotelFiltersComponent,
    HotelRoomBookNowButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerInput,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatMenu,
    MatCardModule,
    MatRippleModule,
    MatCheckboxModule,
    MatRadioModule,
    NgOptimizedImage,
    HomeEventsCardComponent,
    HotelRoomCardImagesComponent,
    MatMenuTrigger,
    HomeModule,
    MatDivider,
  ],
})
export class HotelModule {}
