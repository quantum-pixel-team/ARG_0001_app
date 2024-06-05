import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  srcSet='640w, 750w,828w 1200w, 1980w, 2048w'
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
