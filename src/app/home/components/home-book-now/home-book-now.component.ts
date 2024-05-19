import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home-book-now',
  templateUrl: './home-book-now.component.html',
  styleUrl: './home-book-now.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeBookNowComponent {
  checkoutDate: Date | undefined;
  checkinDate: Date = new Date();
  currentDate: Date = new Date();

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  adults = 0;
  children = 0;
  rooms = 0;
  constructor(
    private datePipe: DatePipe,
    private breakpointObserver: BreakpointObserver,
  ) {}

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

  onQuantityChange(quantity: number, type: string) {
    switch (type) {
      case 'adults':
        this.adults = quantity;
        break;
      case 'children':
        this.children = quantity;
        break;
      case 'rooms':
        this.rooms = quantity;
        break;
      default:
        break;
    }
  }
  onCheckinDateChanged() {
    if (this.checkoutDate == undefined) return;
    if (
      this.checkinDate.getMilliseconds() >= this.checkoutDate.getMilliseconds()
    ) {
      this.checkoutDate = undefined;
    }
  }
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
  }
  submit() {
    const baseUrl =
      'https://app.inn-connect.com/book/properties/Aragosta%20Hotel%26Restaurant';
    const params = `?start_date=${this.formatDate(this.checkinDate)}&adult-count%5B0%5D=${this.adults}&children-count%5B0%5D=${this.children}`;
    open(baseUrl + params);
  }
}
