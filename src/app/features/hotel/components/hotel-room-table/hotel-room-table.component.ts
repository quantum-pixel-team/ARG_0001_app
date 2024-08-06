import { Component, Input, OnInit } from '@angular/core';
import { HotelRoom } from '../../interfaces/room';
import { MatDialog } from '@angular/material/dialog';
import { HotelRoomDetailsComponent } from '../hotel-room-details/hotel-room-details.component';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-hotel-room-table',
  templateUrl: './hotel-room-table.component.html',
  styleUrl: './hotel-room-table.component.scss',
})
export class HotelTableRoomComponent implements OnInit {
  @Input() hotelRooms!: HotelRoom[];
  @Input() numberOfAdults!: number;
  @Input() numberOfRequestedRooms!: number;
  @Input() numberOfRequestedNights!: number;
  @Input() childrenAges: number[] = [];
  private isTablet = false;

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.isTabletWidth.subscribe((isTablet) => {
      this.isTablet = isTablet;
    });
  }

  onBookNowClick(room: HotelRoom) {
    open(room.bookNowUrl, '_BLANK');
  }

  isTabletWidth: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onViewMoreClicked(room: HotelRoom) {
    const dialogRef = this.dialog.open(HotelRoomDetailsComponent, {
      data: room,
      position: { bottom: this.isTablet ? '0' : undefined },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'hotel-room-details-container',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

  isRoomCapacityNotEnough(room: HotelRoom) {
    const guests = this.numberOfAdults + (this.childrenAges?.length | 0);
    return guests > room.totalCapacity;
  }

  isRoomNotAvailable(room: HotelRoom) {
    return (
      this.numberOfRequestedRooms > room.availableRooms ||
      this.isStayDurationBelowMinNights(room)
    );
  }

  isStayDurationBelowMinNights(room: HotelRoom) {
    return this.numberOfRequestedNights < room.minimumNights;
  }

  getNotAvailableLabel(room: HotelRoom) {
    if (this.isRoomNotAvailable(room)) return 'No more rooms';
    if (this.isStayDurationBelowMinNights(room))
      return `Minimum nights ${room.minimumNights}`;
    return undefined;
  }
}
