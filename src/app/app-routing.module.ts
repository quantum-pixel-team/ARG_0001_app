import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';

const routes: Routes = [
  { path: 'home', component: HomeContainerComponent },
  {
    path: 'hotel',
    loadChildren: () =>
      import('./features/hotel/hotel.module').then((m) => m.HotelModule),
  },
  {
    path: 'restaurant',
    loadChildren: () =>
      import('./features/restaurant/restaurant.module').then(
        (m) => m.RestaurantModule,
      ),
  },
  {
    path: 'conference',
    loadChildren: () =>
      import('./features/conference/conference.module').then(
        (m) => m.ConferenceModule,
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./features/events/events.module').then((m) => m.EventsModule),
  },
  {
    path: 'contact-us',
    loadChildren: () =>
      import('./features/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule,
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
