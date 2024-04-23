import {Component, inject} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {AsyncPipe, NgClass} from "@angular/common";

@Component({
  selector: 'app-home-welcome',
  standalone: true,
  imports: [
    AsyncPipe,
    NgClass
  ],
  templateUrl: './home-welcome.component.html',
  styleUrl: './home-welcome.component.scss'
})
export class HomeWelcomeComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> =
    this.breakpointObserver
      .observe([Breakpoints.XSmall, '(max-width: 700px)'])
      .pipe(
        map((result) => result.matches),
        shareReplay(),
      );

}
