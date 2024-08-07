import {Component, OnDestroy, OnInit} from '@angular/core';
import { HomeHttpService } from '../../services/home-http.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {Observable, Subject, takeUntil} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {HotelRoom} from "../../../features/hotel/interfaces/room";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrl: './home-hotel.component.scss',
})
export class HomeHotelComponent implements OnInit, OnDestroy {
  rooms: HotelRoom[] = [];
  unsubscribe$ = new Subject<void>();
  constructor(
    private homeHttpService: HomeHttpService,
    private breakpointObserver: BreakpointObserver,
    private router:Router
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  isXSmallWidth$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  selectedCard = 0;
  ngOnInit(): void {
    this.homeHttpService
      .fetchTopRooms()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (value) => {
          return (this.rooms = value.content);
        },
      });
  }
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
    this.router.navigateByUrl(
      '/hotel',
    );
  }
}
