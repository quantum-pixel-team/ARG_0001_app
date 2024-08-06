import {ChangeDetectionStrategy, Component, model, OnInit, ViewEncapsulation} from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-room-availability',
  templateUrl: './hotel-room-availability.component.html',
  styleUrl: './hotel-room-availability.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,

})
export class HotelRoomAvailabilityComponent  {


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'room-not-available' : '';
    }

    return '';
  };
}
