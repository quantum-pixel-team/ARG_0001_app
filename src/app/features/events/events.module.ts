import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { EventsContainerComponent } from './components/events-cotainer/events-container.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatOption, MatRipple } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatSelect } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { NoEventsComponent } from './components/no-events/no-events.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EventsContainerComponent,
  },
];

@NgModule({
  declarations: [
    EventsContainerComponent,
    EventCardComponent,
    NoEventsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatRipple,
    MatPaginatorModule,
    MatMenuModule,
    MatFormField,
    MatOption,
    MatSelect,
    NgOptimizedImage,
    RouterModule.forChild(routes),
  ],
})
export class EventsModule {}
