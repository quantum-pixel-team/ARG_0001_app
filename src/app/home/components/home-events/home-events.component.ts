import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Event } from '../../interfaces/event';
import { AsyncPipe, NgForOf } from '@angular/common';
import { HomeEventsCardComponent } from '../home-events-card/home-events-card.component';
import { HomeHttpService } from '../../services/home-http.service';
import { MatCard, MatCardHeader, MatCardImage } from '@angular/material/card';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.scss',
  standalone: true,
  imports: [
    NgForOf,
    HomeEventsCardComponent,
    MatCard,
    MatCardHeader,
    MatCardImage,
    AsyncPipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeEventsComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private homeHttpService: HomeHttpService,
    private breakpointObserver: BreakpointObserver,
  ) {}
  isDesktopWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
  ngOnInit(): void {
    this.fetchEvents();
    this.initializeSwiper();
  }

  private initializeSwiper() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl === null) return;
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      pagination: {
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1050: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
    swiperEl.initialize();
  }

  private fetchEvents() {
    this.homeHttpService.fetchTopEvents().subscribe({
      next: (value) => (this.events = value),
      error: (err) => console.log(err),
    });
  }
}
