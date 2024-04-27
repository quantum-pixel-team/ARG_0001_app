import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-conference',
  templateUrl: './home-conference.component.html',
  styleUrl: './home-conference.component.scss',
})
export class HomeConferenceComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isMobileWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
