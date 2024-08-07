import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { AppEvent } from '../../../features/events/interfaces/app-event';
import { AsyncPipe, NgClass, NgForOf } from '@angular/common';
import { HomeEventsCardComponent } from '../home-events-card/home-events-card.component';
import { MatCard, MatCardHeader, MatCardImage } from '@angular/material/card';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { EventHttpService } from '../../../features/events/services/event-http.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SwiperContainer } from 'swiper/swiper-element';
import {LanguageService} from "../../../shared/services/language.service";

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
export class HomeEventsComponent implements AfterViewInit, OnDestroy {
  events: AppEvent[] = [];
  private languageCode: string;
  @ViewChild('swiper') swiperRef!: ElementRef<SwiperContainer>;
  private langChangeSubscription: Subscription | null = null;

  constructor(
    private homeHttpService: EventHttpService,
    private breakpointObserver: BreakpointObserver,
    readonly languageService: LanguageService,
  ) {
    this.languageCode = this.languageService.currentLang;
  }

  isDesktopWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(min-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  ngAfterViewInit(): void {
    this.fetchEvents();
    this.initializeSwiper();

    this.langChangeSubscription = this.languageService.onLangChange.subscribe(
      (event) => {
        this.languageCode = event.code;
        this.fetchEvents();
      },
    );
  }

  private initializeSwiper() {
    const swiperParams = {
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
    };
    Object.assign(this.swiperRef.nativeElement, swiperParams);
    this.swiperRef.nativeElement.initialize();
    this.swiperRef.nativeElement.swiper.slideTo(1);
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  private fetchEvents() {
    this.homeHttpService.fetchTopEvents(this.languageCode).subscribe({
      next: (value) => {
        this.events = value.content;
      },
      error: (err) => console.log(err),
    });
  }
}
