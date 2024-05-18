import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { AppEvent } from '../../interfaces/app-event';

import { EventHttpService } from '../../services/event-http.service';
import { map } from 'rxjs/operators';
import { Page } from '../../../../shared/interfaces/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-events-cotainer',
  templateUrl: './events-container.component.html',
  styleUrl: './events-container.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EventsContainerComponent implements AfterViewInit {
  upcomingEvents: Page<AppEvent> | undefined;
  recentEvents: Page<AppEvent> | undefined;
  pageSizeOptions = [5, 10, 25, 100];
  pageSize = 5;
  @ViewChild('eventsContainer', { static: false }) scrollTarget!: ElementRef;

  constructor(private service: EventHttpService) {}

  ngAfterViewInit(): void {
    const query = `pageIndex=0&pageSize=${this.pageSize}`;

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
        next: (value) => (this.recentEvents = value),
        error: (err) => console.error(err),
      });
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
    const query = `pageIndex=${$event.pageIndex}&pageSize=${$event.pageSize}`;
    this.fetchRecentEvents(query);
  }

  OnUpcomingPageChanged($event: PageEvent) {
    this.pageSize = $event.pageSize;
    const query = `pageIndex=${$event.pageIndex}&pageSize=${$event.pageSize}`;
    this.fetchUpcomingEvents(query);
  }
}
