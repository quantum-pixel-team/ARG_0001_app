import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home-image',
  templateUrl: './home-image.component.html',
  styleUrl: './home-image.component.scss',
})
export class HomeImageComponent {
  private breakpointObserver = inject(BreakpointObserver);

  srcSet = '640w, 750w, 828w, 1080w,1200w,1980w';
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
