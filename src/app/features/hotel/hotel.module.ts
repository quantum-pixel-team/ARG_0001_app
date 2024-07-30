import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { HotelReservationContainerComponent } from './hotel-reservation-container/hotel-reservation-container.component';
import { RouterModule, Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { HotelCheckInComponent } from './hotel-check-in/hotel-check-in.component';
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
import { MatMenu } from '@angular/material/menu';
import { HotelTableRoomComponent } from './components/hotel-table-room/hotel-table-room.component';
import { HotelRoomCardComponent } from './components/hotel-room-card/hotel-room-card.component';
import { MatCardModule } from '@angular/material/card';
import { HotelFiltersComponent } from './components/hotel-filters/hotel-filters.component';
import { MatRippleModule } from '@angular/material/core';
import { HotelBookNowButtonComponent } from './components/hotel-book-now-button/hotel-book-now-button.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";

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
    HotelTableRoomComponent,
    HotelRoomCardComponent,
    HotelFiltersComponent,
    HotelBookNowButtonComponent
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
    MatRadioModule
  ],
})
export class HotelModule {}
