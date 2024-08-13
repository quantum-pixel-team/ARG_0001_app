import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HotelRoom } from '../../interfaces/room';
import { MatDialog } from '@angular/material/dialog';
import { HotelRoomDetailsComponent } from '../hotel-room-details/hotel-room-details.component';
import { Observable, Subject, takeUntil } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HotelRoomAvailabilityComponent } from '../hotel-room-availability/hotel-room-availability.component';
import { HotelRoomPolicyComponent } from '../hotel-room-policy/hotel-room-policy.component';

@Component({
  selector: 'app-hotel-room-table',
  templateUrl: './hotel-room-table.component.html',
  styleUrl: './hotel-room-table.component.scss',
})
export class HotelTableRoomComponent implements OnInit, OnDestroy {
  @Input() hotelRooms!: HotelRoom[];
  @Input() numberOfAdults!: number;
  @Input() numberOfRequestedRooms!: number;
  @Input() numberOfRequestedNights!: number;
  @Input() childrenAges: number[] = [];
  private isTablet = false;
  private isMobileS = false;
  public unsubscribe$ = new Subject<void>();

  constructor(
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.isTabletWidth.subscribe((isTablet) => {
      this.isTablet = isTablet;
    });
    this.isMobileStWidth.subscribe((isMobileS) => {
      this.isMobileS = isMobileS;
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
  isMobileStWidth: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 425px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onViewMoreClicked(room: HotelRoom) {
    const roomDetailsDialog = this.dialog.open(HotelRoomDetailsComponent, {
      data: room,
      position: { bottom: this.isTablet ? '0' : undefined },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'hotel-room-details-container',
    });
    roomDetailsDialog.componentInstance.policyClicked
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((room) => this.onPolicyClicked(room));
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

  onCheckDatesClicked(room: HotelRoom) {
    this.dialog.open(HotelRoomAvailabilityComponent, {
      data: room,
      position: { bottom: this.isMobileS ? '0' : undefined },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'hotel-room-availability',
    });
  }

  onPolicyClicked(room: HotelRoom) {
    this.dialog.open(HotelRoomPolicyComponent, {
      data: room,
      position: { bottom: this.isMobileS ? '0' : undefined },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'hotel-room-policy',
    });
  }
}
