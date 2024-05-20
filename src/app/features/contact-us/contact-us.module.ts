import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ContactUsContainerComponent} from './contact-us-container/contact-us-container.component';
import {MatCardModule} from "@angular/material/card";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ContactUsContainerComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIcon,
    MatIconModule,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    NgOptimizedImage,
    ReactiveFormsModule
  ],
})
export class ContactUsModule {
}
