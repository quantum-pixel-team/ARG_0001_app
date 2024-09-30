import {
  Component,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Language } from '../../interfaces/Language';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MainNavComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);
  @Output() languageChanged = new EventEmitter<Language>();

  hasScrolled = false;
  isHomePage = false;
  navigationLinks = [
    { label: 'Home', routerLink: 'home', icon: '' },
    {
      label: 'Hotel',
      routerLink: 'hotel',
      icon: 'assets/icons/navbar/hotel.svg',
    },
    {
      label: 'Restaurant',
      routerLink: 'restaurant',
      icon: 'assets/icons/navbar/restaurant.svg',
    },
    {
      label: 'Conference Room',
      routerLink: 'conference',
      icon: 'assets/icons/navbar/conference.svg',
    },
    {
      label: 'Events',
      routerLink: 'events',
      icon: 'assets/icons/navbar/events.svg',
    },
    {
      label: 'Contact',
      routerLink: 'contact-us',
      icon: 'assets/icons/navbar/conference',
    },
  ];

  mobileNavigationLinks = [
    {
      label: 'Home',
      width: '16',
      height: '18',
      routerLink: 'home',
      icon: 'assets/icons/navbar/home.svg',
    },
    {
      label: 'Hotel',
      width: '25',
      height: '15',
      routerLink: 'hotel',
      icon: 'assets/icons/navbar/hotel.svg',
    },
    {
      label: 'Restaurant',
      width: '15',
      height: '15',
      routerLink: 'restaurant',
      icon: 'assets/icons/navbar/restaurant.svg',
    },
    {
      label: 'Conference',
      width: '30',
      height: '15',
      routerLink: 'conference',
      icon: 'assets/icons/navbar/conference.svg',
    },
    {
      label: 'Events',
      width: '14',
      height: '15',
      routerLink: 'events',
      icon: 'assets/icons/navbar/events.svg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initial check for scrolling on load
    this.onScroll();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/home';
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.hasScrolled =
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 920px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onLanguageChange(event: Language) {
    this.languageChanged.emit(event);
  }
}
