import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgOptimizedImage],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
