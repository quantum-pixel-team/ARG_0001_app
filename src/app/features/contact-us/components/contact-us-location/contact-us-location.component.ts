import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us-location',
  templateUrl: './contact-us-location.component.html',
  styleUrl: './contact-us-location.component.scss',
})
export class ContactUsLocationComponent {
  @Output() navigateToMaps = new EventEmitter();
  @Input() isHandset$!: Observable<boolean>;
}
