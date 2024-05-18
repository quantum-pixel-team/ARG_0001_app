import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-home-location',
  templateUrl: './home-location.component.html',
  styleUrl: './home-location.component.scss',
})
export class HomeLocationComponent {
  @Output() locationClicked  = new EventEmitter();
}
