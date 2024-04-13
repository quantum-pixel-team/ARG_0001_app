import { NgModule } from '@angular/core';
import { HomeBookNowComponent } from './home-book-now/home-book-now.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, DatePipe, NgClass, NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { BookNowOptionRowComponent } from './book-now-option-row/book-now-option-row.component';
import { MatCardContent } from '@angular/material/card';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeBookNowComponent,
    BookNowOptionRowComponent,
  ],
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    DatePipe,
    MatMenuModule,
    MatDividerModule,
    NgIf,
    AsyncPipe,
    NgClass,
    MatCardContent,
  ],
})
export class HomeModule {}
