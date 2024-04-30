import {Component, Input} from '@angular/core';
import {Event} from "../../interfaces/event";

@Component({
  selector: 'app-home-events-card',
  templateUrl: './home-events-card.component.html',
  styleUrl: './home-events-card.component.scss',
})
export class HomeEventsCardComponent {
  @Input() event: Event | undefined

}
