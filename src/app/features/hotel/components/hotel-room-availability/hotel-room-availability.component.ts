import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { HttpParams } from '@angular/common/http';
import { HotelHttpService } from '../../services/hotel-http.service';
import { Subject, takeUntil } from 'rxjs';
import { RoomAvailability } from '../../interfaces/RoomAvailability';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HotelRoom } from '../../interfaces/room';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-hotel-room-availability',
  templateUrl: './hotel-room-availability.component.html',
  styleUrl: './hotel-room-availability.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HotelRoomAvailabilityComponent implements OnInit {
  constructor(
    private httpService: HotelHttpService,
    private datePipe: DatePipe,
  ) {}

  room = inject<HotelRoom>(MAT_DIALOG_DATA);

  public unsubscribe$ = new Subject<void>();
  protected roomAvailabiliesMap: Map<string, RoomAvailability> | undefined;

  ngOnInit(): void {
    const startDate = new Date();
    startDate.setDate(1);

    const endDate = this.addMonths(startDate, 12);

    this.httpService
      .fetchRoomAvailimility(
        new HttpParams()
          .append('room-id', this.room.id)
          .append('start-date', startDate.toISOString())
          .append('end-date', endDate.toISOString()),
      )
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (value: RoomAvailability[]) => {
          this.roomAvailabiliesMap = new Map(
            value.map((room) => {
              const date = new Date(room.date).toLocaleDateString();
              return [date, room];
            }),
          );
        },
        error: (err) => console.debug(err),
      });
  }

  addMonths(date: Date, months: number): Date {
    const result = new Date(date);
    result.setMonth(result.getMonth() + months);
    return result;
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const dateString = cellDate.toLocaleDateString();
      const availability = this.roomAvailabiliesMap?.get(dateString);
      const isPastDate = cellDate < new Date();
      return isPastDate || (availability && availability.availableRooms === 0)
        ? 'room-not-available'
        : '';
    }
    return '';
  };

  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
  }
}
