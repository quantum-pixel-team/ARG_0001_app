import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
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
    const queryParam = `room-id=${this.room.id}&start-date=${this.formatDate(startDate)}&end-date=${this.formatDate(endDate)}`;

    this.httpService
      .fetchRoomAvailimility(queryParam)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (value: RoomAvailability[]) => {
          this.roomAvailabiliesMap = new Map(
            value.map((room) => [this.formatDate(new Date(room.date)), room]),
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
      const formattedCellDate = this.formatDate(cellDate);
      const availability = this.roomAvailabiliesMap?.get(formattedCellDate);
      return availability && availability.availableRooms === 0 ? 'room-not-available' : '';
    }
    return '';
  };
  formatDate(date: Date): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
  }
}
