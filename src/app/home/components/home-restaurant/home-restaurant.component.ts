import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item';
import { HomeHttpService } from '../../services/home-http.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-restaurant',
  templateUrl: './home-restaurant.component.html',
  styleUrl: './home-restaurant.component.scss',
})
export class HomeRestaurantComponent implements OnInit {
  topMenu!: MenuItem[];
  topDesserts!: MenuItem[];

  constructor(
    private httpService: HomeHttpService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.topMenu = this.httpService.getTopMenu();
    this.topDesserts = this.httpService.getTopDesserts();
  }

  isMobileWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 1000px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  xSmallWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 480px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
