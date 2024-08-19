import { Component, Input } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HotelRoom } from '../../../features/hotel/interfaces/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrl: './home-hotel.component.scss',
})
export class HomeHotelComponent {
  @Input() rooms!: HotelRoom[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {}

  isXSmallWidth$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  selectedCard = 0;

  showPrevCard(i: number) {
    if (this.selectedCard > 0) {
      this.selectedCard = i - 1;
    }
  }

  showNextCard(i: number) {
    if (this.selectedCard < this.rooms.length - 1) {
      this.selectedCard = i + 1;
    }
  }

  onBookNowClicked() {
    this.router.navigateByUrl('/hotel');
  }
}
