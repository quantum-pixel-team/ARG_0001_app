import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelReservationContainerComponent } from './hotel-reservation-container/hotel-reservation-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HotelReservationContainerComponent,
  },
];

@NgModule({
  declarations: [HotelReservationContainerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HotelModule {}
