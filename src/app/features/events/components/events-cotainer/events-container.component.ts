import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppEvent } from '../../interfaces/app-event';

import { EventHttpService } from '../../services/event-http.service';
import { map } from 'rxjs/operators';
import { Page } from '../../../../shared/interfaces/page';
import { PageEvent } from '@angular/material/paginator';
import { LanguageService } from '../../../../shared/services/language.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-events-cotainer',
  templateUrl: './events-container.component.html',
  styleUrl: './events-container.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EventsContainerComponent implements OnInit,AfterViewInit {
  upcomingEvents: Page<AppEvent> | undefined;
  recentEvents: Page<AppEvent> | undefined;
  pageSizeOptions = [5, 10, 25, 100];
  pageSize = 5;
  @ViewChild('events', { static: false }) scrollTarget!: ElementRef;

  languageCode: string;

  constructor(
    private service: EventHttpService,
    private languageService: LanguageService,
    private titleService: Title,
    private metaTagService: Meta,
  ) {
    this.languageCode = this.languageService.currentLang;
  }

  ngAfterViewInit(): void {
    this.languageService.onLangChange.subscribe((event) => {
      this.languageCode = event.code;
      this.fetchEvents();
    });
    this.fetchEvents();
  }

  private fetchEvents() {
    const query = `pageIndex=0&pageSize=${this.pageSize}&language=${this.languageCode}`;
    this.fetchUpcomingEvents(query);
    this.fetchRecentEvents(query);
  }

  private fetchUpcomingEvents(query: string) {
    this.service
      .fetchUpcomingEvents(query)
      .pipe(map(this.sliceDescriptionIfSmallWidth))
      .subscribe({
        next: (value) => {
          this.upcomingEvents = value;
        },
        error: (err) => console.error(err),
      });
  }

  private fetchRecentEvents(query: string) {
    this.service
      .fetchRecentEvents(query)
      .pipe(map(this.sliceDescriptionIfSmallWidth))
      .subscribe({
        next: (value) => {
          this.recentEvents = value;
          this.navigateToTop();
        },
        error: (err) => console.error(err),
      });
  }

  private navigateToTop() {
    this.scrollTarget.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  private sliceDescriptionIfSmallWidth(events: Page<AppEvent>) {
    if (window.innerWidth < 600) {
      events.content = events.content.map((event) => {
        event.shortDescription =
          event.shortDescription.substring(0, 200) + '...';
        return event;
      });
      return events;
    }
    return events;
  }

  OnRecentPageChanged($event: PageEvent) {
    this.pageSize = $event.pageSize;
    const query = `pageIndex=${$event.pageIndex}&pageSize=${$event.pageSize}&language=${this.languageCode}`;
    this.fetchRecentEvents(query);
  }

  OnUpcomingPageChanged($event: PageEvent) {
    this.pageSize = $event.pageSize;
    const query = `pageIndex=${$event.pageIndex}&pageSize=${$event.pageSize}&language=${this.languageCode}`;
    this.fetchUpcomingEvents(query);
  }

  ngOnInit(): void {
    const title = 'Aragosta Hotel & Restaurant - Events';
    const ogTitle = 'Welcome to Aragosta Hotel & Restaurant in Durres  - Events ';

    this.titleService.setTitle(title);

    const keywords = 'event, Durres, meeting, meetings, events, events near me,' +
      ' events happening, durres, events near me, events in durres, book events, events nearby, aragosta events,' +
      ' events durres, etc';
    const description = 'Celebrate in style at Hotel Aragosta, where our sophisticated event spaces and dedicated team ensure every gathering—from weddings to corporate meetings—is a remarkable success. Let us bring your vision to life.';
    const ogDescription = 'Host unforgettable events at Hotel Aragosta, where our elegant venues and exceptional service create the perfect setting for weddings, conferences, and special occasions. Let us make your event truly memorable.';
    this.metaTagService.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      {
        property: 'og:image',
        content: 'https://aragosta-test.imgix.net/A4.PNG?auto=format&w=1080',
      },
      { property: 'og:url', content: 'aragosta.al/events' },
    ]);
  }
}
