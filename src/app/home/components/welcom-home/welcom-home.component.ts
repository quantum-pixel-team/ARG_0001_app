import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-welcom-home',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgOptimizedImage],
  templateUrl: './welcom-home.component.html',
  styleUrl: './welcom-home.component.scss',
})
export class WelcomHomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
