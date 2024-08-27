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

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 920px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
