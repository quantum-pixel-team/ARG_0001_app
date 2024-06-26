import { Component } from '@angular/core';
import { ServiceIcon } from '../../interfaces/service-icon';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrl: './home-service.component.scss',
})
export class HomeServiceComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  getIcon: ServiceIcon[] = [
    {
      id: 1,
      icon: 'wifi',
      title: 'Wifi',
    },
    {
      id: 2,
      icon: 'local_parking',
      title: 'Parking',
    },
    {
      id: 3,
      icon: 'beach_access',
      title: 'Beach',
    },
    {
      id: 4,
      icon: 'ev_station',
      title: 'ElectricCharger',
    },
    {
      id: 5,
      icon: 'local_atm',
      title: 'ATM',
    },
    {
      id: 6,
      icon: 'payments',
      title: 'CashCard',
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 700px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
