import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ConferenceContainerComponent } from './components/conference-container/conference-container.component';
import { ConferenceWelcomePageComponent } from './components/conference-welcome-page/conference-welcome-page.component';
import { ConferenceBookingComponent } from './components/conference-booking/conference-booking.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatIcon } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConferenceContainerComponent,
  },
];

@NgModule({
  declarations: [
    ConferenceContainerComponent,
    ConferenceWelcomePageComponent,
    ConferenceBookingComponent,
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    MatIcon,
    RouterModule.forChild(routes),
  ],
})
export class ConferenceModule {}
