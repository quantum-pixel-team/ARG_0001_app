import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantContainerComponent } from './components/restaurant-container/restaurant-container.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantRoutingModule {}
