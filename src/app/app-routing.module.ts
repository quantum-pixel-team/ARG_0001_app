import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './features/user/components/user-container/user-container.component';
import { HotelReservationContainerComponent } from './features/hotel/hotel-reservation-container/hotel-reservation-container.component';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';

const routes: Routes = [
  { path: 'users', component: UserContainerComponent },
  { path: 'home', component: HomeContainerComponent },
  { path: 'hotel', component: HotelReservationContainerComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
