import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-conference-welcome-page',
  templateUrl: './conference-welcome-page.component.html',
  styleUrl: './conference-welcome-page.component.scss',
})
export class ConferenceWelcomePageComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 700px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
