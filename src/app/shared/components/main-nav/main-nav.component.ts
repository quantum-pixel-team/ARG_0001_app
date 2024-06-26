import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Output,
  ViewChild,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Language } from '../../interfaces/Language';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent implements AfterViewInit {
  private breakpointObserver = inject(BreakpointObserver);
  @Output() languageChanged = new EventEmitter<Language>();

  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;
  hasScrolled = false;
  isHomePage = false;
  navigationLinks = [
    { label: 'Home', routerLink: 'home' },
    { label: 'Hotel', routerLink: 'hotel' },
    { label: 'Restaurant', routerLink: 'restaurant' },
    { label: 'Conference Room', routerLink: 'conference' },
    { label: 'Events', routerLink: 'events' },
    { label: 'Contact', routerLink: 'contact-us' },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngAfterViewInit(): void {
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
      const scrollable = this.sidenavContainer.scrollable;

      const offsetFromTop = scrollable.measureScrollOffset('top');
      const scrolled = offsetFromTop > 20;
      if (scrolled !== this.hasScrolled) {
        this.hasScrolled = scrolled;
        this.cdr.detectChanges();
      }
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/home';
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onLanguageChange(event: Language) {
    this.languageChanged.emit(event);
  }
}
