import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserContainerComponent } from './features/user/components/user-container/user-container.component';
import { HotelReservationContainerComponent } from './features/hotel/hotel-reservation-container/hotel-reservation-container.component';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';
import { RestaurantContainerComponent } from './features/restaurant/components/restaurant-container/restaurant-container.component';
import { ConferenceContainerComponent } from './features/conference/components/conference-container/conference-container.component';
import { EventsContainerComponent } from './features/events/components/events-cotainer/events-container.component';
import { ContactUsContainerComponent } from './features/contact-us/contact-us-container/contact-us-container.component';

const routes: Routes = [
  { path: 'users', component: UserContainerComponent },
  { path: 'home', component: HomeContainerComponent },
  { path: 'hotel', component: HotelReservationContainerComponent },
  { path: 'restaurant', component: RestaurantContainerComponent },
  { path: 'conference', component: ConferenceContainerComponent },
  { path: 'events', component: EventsContainerComponent },
  { path: 'contact-us', component: ContactUsContainerComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
