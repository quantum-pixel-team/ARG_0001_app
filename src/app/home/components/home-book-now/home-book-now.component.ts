import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BookNowFilters } from '../../../features/hotel/interfaces/HotelFilters';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-home-book-now',
  templateUrl: './home-book-now.component.html',
  styleUrl: './home-book-now.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeBookNowComponent implements OnInit {
  currentDate: Date = new Date();
  checkoutDate: Date | undefined;

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Input() filters!: BookNowFilters;

  @Output() filterChanged$ = new EventEmitter<BookNowFilters>();

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.checkoutDate = new Date(this.filters.checkOutDate);
  }

  isMobileWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 850px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  isXXSmallWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 350px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  addDays = (date: Date, days: number): Date => {
    const copy = new Date(date);
    copy.setDate(date.getDate() + days);
    return copy;
  };

  onAdultsChanged(numberOfAdults: number) {
    this.filters = { ...this.filters, numberOfAdults };
  }

  onRoomsChanged(numberOfRooms: number) {
    this.filters = { ...this.filters, numberOfRooms };
  }

  onChildrenChanged(numberOfChildren: number) {
    this.filters = { ...this.filters, numberOfChildren };
  }

  onCheckinDateChanged(checkInDate: Date) {
    this.filters = { ...this.filters, checkInDate: checkInDate };
    if (this.checkoutDate && this.filters.checkInDate >= this.checkoutDate) {
      this.checkoutDate = undefined;
    }
  }

  onCheckinOutChanged(date: Date) {
    this.checkoutDate = date;
    this.filters = { ...this.filters, checkOutDate: date };
  }

  submit() {
    this.filterChanged$.emit(this.filters);
  }
}
