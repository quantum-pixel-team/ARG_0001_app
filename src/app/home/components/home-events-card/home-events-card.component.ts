import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { AppEvent } from '../../../features/events/interfaces/app-event';
import { MatCard, MatCardHeader, MatCardImage } from '@angular/material/card';
import { Observable } from 'rxjs';
import {AsyncPipe, NgClass, NgOptimizedImage} from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home-events-card',
  standalone: true,
  templateUrl: './home-events-card.component.html',
  styleUrl: './home-events-card.component.scss',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardImage,
    NgClass,
    AsyncPipe,
    MatButton,
    NgOptimizedImage,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeEventsCardComponent {
  @Input() event!: AppEvent;
  @Input() isDesktopWidth$!: Observable<boolean>;
}
