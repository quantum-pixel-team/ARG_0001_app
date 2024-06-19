import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ContactUsContainerComponent} from './contact-us-container/contact-us-container.component';
import {MatCardModule} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {ContactUsFromComponent} from './components/contact-us-from/contact-us-from.component';
import {ContactUsLocationComponent} from './components/contact-us-location/contact-us-location.component';
import {RouterModule, Routes} from '@angular/router';
import {TranslateModule} from "@ngx-translate/core";
import { ContactUsContainerComponent } from './components/contact-us-container/contact-us-container.component';

const routes: Routes = [
  {
    path: '',
    component: ContactUsContainerComponent,
  },
];

@NgModule({
  declarations: [
    ContactUsContainerComponent,
    ContactUsFromComponent,
    ContactUsLocationComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatIconModule,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ],
})
export class ContactUsModule {}
