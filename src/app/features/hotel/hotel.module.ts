import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe, NgOptimizedImage } from '@angular/common';
import { HotelReservationContainerComponent } from './components/hotel-reservation-container/hotel-reservation-container.component';
import { RouterModule, Routes } from '@angular/router';
import { HotelOverviewComponent } from './components/hotel-overview/hotel-overview.component';
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
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { HotelTableRoomComponent } from './components/hotel-room-table/hotel-room-table.component';
import { HotelRoomCardComponent } from './components/hotel-room-card/hotel-room-card.component';
import { MatCardModule } from '@angular/material/card';
import { HotelFiltersComponent } from './components/hotel-filters/hotel-filters.component';
import { MatRippleModule } from '@angular/material/core';
import { HotelRoomBookNowButtonComponent } from './components/hotel-room-book-now-button/hotel-room-book-now-button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { HomeEventsCardComponent } from '../../home/components/home-events-card/home-events-card.component';
import { HotelRoomCardImagesComponent } from './components/hotel-room-card-images/hotel-room-card-images.component';
import { HotelDateButtonComponent } from './components/hotel-date-button/hotel-date-button.component';
import { HomeModule } from '../../home/components/home.module';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { HotelFiltersDialogComponent } from './components/hotel-filters-dialog/hotel-filters-dialog.component';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogTitle,
} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HotelBookNowButtonMobileComponent } from './components/hotel-date-button-mobile/hotel-book-now-button-mobile.component';
import { ChildAgeOptionRowComponent } from './components/hotel-child-age-row/child-age-option-row.component';
import { HotelRoomAvailabilityComponent } from './components/hotel-room-availability/hotel-room-availability.component';
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '',
    component: HotelReservationContainerComponent,
  },
];

@NgModule({
  declarations: [
    HotelReservationContainerComponent,
    HotelOverviewComponent,
    HotelCheckInComponent,
    HotelDateButtonComponent,
    HotelTableRoomComponent,
    HotelRoomCardComponent,
    HotelFiltersComponent,
    HotelRoomBookNowButtonComponent,
    HotelFiltersDialogComponent,
    HotelBookNowButtonMobileComponent,
    ChildAgeOptionRowComponent,
    HotelRoomAvailabilityComponent,
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatPaginator,
    MatProgressSpinnerModule,
    MatDialogTitle,
    TranslateModule,
  ],
})
export class HotelModule {}
