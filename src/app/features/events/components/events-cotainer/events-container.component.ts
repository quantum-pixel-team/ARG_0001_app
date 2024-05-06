import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AppEvent} from "../../interfaces/app-event";

import {EventHttpService} from "../../services/event-http.service";
import {Observable} from "rxjs";
import {map, shareReplay} from "rxjs/operators";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Page} from "../../../../shared/interfaces/page";

@Component({
  selector: 'app-events-cotainer',
  templateUrl: './events-container.component.html',
  styleUrl: './events-container.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EventsContainerComponent implements AfterViewInit {
  upcomingEvents: AppEvent[] = []
  recentEvents: AppEvent[] = []
  query = ''
  smallWidthThreshold = 500;

  constructor(private service: EventHttpService,
              private breakpointObserver: BreakpointObserver,
  ) {
  }


  ngAfterViewInit(): void {
    this.service.fetchUpcomingEvents(this.query)
      .pipe(map(this.sliceDescriptionIfSmallWidth))
      .subscribe({
        next: value => {
          this.upcomingEvents = value
        },
        error: err => console.error(err)
      });

    this.service.fetchRecentEvents(this.query)
      .pipe(map(this.sliceDescriptionIfSmallWidth))
      .subscribe({
        next: value => this.recentEvents = value,
        error: err => console.error(err)
      })

  }

  private sliceDescriptionIfSmallWidth(events: Page<AppEvent>) {
    if (window.innerWidth < 600) {
      return events.content.map(event=>{
        event.shortDescription = event.shortDescription.substring(0, 200) + '...';
        return event
      })
    }
    return events.content
  }



  private isXsmallWidth() {
    return window.innerWidth < this.smallWidthThreshold;
  }


}
