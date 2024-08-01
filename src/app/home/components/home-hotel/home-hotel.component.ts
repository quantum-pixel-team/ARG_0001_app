import { Component, OnInit } from '@angular/core';
import { HomeHttpService } from '../../services/home-http.service';
import { HotelRoom } from '../../interfaces/hotel-room';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-home-hotel',
  templateUrl: './home-hotel.component.html',
  styleUrl: './home-hotel.component.scss',
})
export class HomeHotelComponent implements OnInit {
  rooms: HotelRoom[] = [] ;

  constructor(
    private homeHttpService: HomeHttpService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  isXSmallWidth$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.XSmall)
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  selectedCard= 0;
  ngOnInit(): void {
    this.rooms = this.homeHttpService.getRooms();

  }
  showPrevCard(i:number){
    if(this.selectedCard > 0){
      this.selectedCard = i-1;
    }
  }
  showNextCard(i:number){

    if (this.selectedCard < this.rooms.length - 1){
     this.selectedCard = i+1;
    }
  }
  getRoomOnLeft() {
    return this.rooms ? this.rooms[0] : undefined;
  }

  getRoomOnFocus() {
    return this.rooms ? this.rooms[1] : undefined;
  }

  getRoomOnRight() {
    return this.rooms ? this.rooms[2] : undefined;
  }

  onBookNowClicked() {
    open(
      'https://app.inn-connect.com/book/properties/Aragosta%20Hotel%26Restaurant',
    );
  }
}
