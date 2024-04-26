import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home-image',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgOptimizedImage],
  templateUrl: './home-image.component.html',
  styleUrl: './home-image.component.scss',
})
export class HomeImageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
