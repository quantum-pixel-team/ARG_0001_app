import { Component, Input } from '@angular/core';
import { AppEvent } from '../../interfaces/app-event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss',
})
export class EventCardComponent {
  @Input() event!: AppEvent;
}
