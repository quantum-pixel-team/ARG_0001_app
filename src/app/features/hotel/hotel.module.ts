import { NgModule } from '@angular/core';
import {CommonModule, JsonPipe} from '@angular/common';
import { HotelReservationContainerComponent } from './hotel-reservation-container/hotel-reservation-container.component';
import { RouterModule, Routes } from '@angular/router';
import {BookNowComponent} from "./book-now/book-now.component";
import {HotelCheckInComponent} from "./hotel-check-in/hotel-check-in.component";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle,
  MatDatepickerToggleIcon, MatDateRangeInput, MatDateRangePicker
} from "@angular/material/datepicker";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {HomeModule} from "../../home/components/home.module";
import {HotelBookNowDateComponent} from "./components/hotel-book-now-date/hotel-book-now-date.component";

const routes: Routes = [
  {
    path: '',
    component: HotelReservationContainerComponent,
  },
];

@NgModule({
  declarations: [HotelReservationContainerComponent,BookNowComponent,HotelCheckInComponent,HotelBookNowDateComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatDatepickerInput, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, MatIcon, MatInput, MatButton, MatMenu, MatMenuTrigger, MatCardContent, MatDivider, HomeModule],
})
export class HotelModule {}
