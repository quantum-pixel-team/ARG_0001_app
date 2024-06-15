import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-book-now-date-picker',
  templateUrl: './home-book-now-date-picker.component.html',
  styleUrl: './home-book-now-date-picker.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeBookNowDatePickerComponent {
  @Input() label!: string;
  @Input() minDate!: Date;
  @Input() selectedDate: Date | undefined;
  @Output() dateChange = new EventEmitter<Date>();
  @Input() isMobileWidth$!: Observable<boolean>;

  onDateChanged(): void {
    this.dateChange.emit(this.selectedDate);
  }
}
