import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { AppEvent } from '../../../features/events/interfaces/app-event';
import { AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { HomeEventsCardComponent } from '../home-events-card/home-events-card.component';
import { MatCard, MatCardHeader, MatCardImage } from '@angular/material/card';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EventHttpService } from '../../../features/events/services/event-http.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
    NgClass,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeEventsComponent implements AfterViewInit {
  events: AppEvent[] = [];
  private languageCode = 'en';

  constructor(
    private homeHttpService: EventHttpService,
    private breakpointObserver: BreakpointObserver,
    readonly translateService: TranslateService,
  ) {}

  isDesktopWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  ngAfterViewInit(): void {
    this.fetchEvents();

    this.translateService.onLangChange.subscribe((event) => {
      this.languageCode = event.lang;
      this.fetchEvents();
    });
  }

  private initializeSwiper() {
    const swiperEl = document.querySelector('swiper-container');
    if (swiperEl === null) return;
    Object.assign(swiperEl, {
      slidesPerView: 1.5,
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
        1000: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
    swiperEl.initialize();
  }

  private fetchEvents() {
    this.homeHttpService.fetchTopEvents(this.languageCode).subscribe({
      next: (value) => {
        this.events = value.content;
        this.initializeSwiper();
      },
      error: (err) => console.log(err),
    });
  }
}
