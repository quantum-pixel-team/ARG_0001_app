import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { HotelHttpService } from '../../services/hotel-http.service';
import { HotelRoom } from '../../interfaces/room';
import {
  BookNowFilters,
  HotelFilters,
  HotelQueryParams,
} from '../../interfaces/HotelFilters';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { debounceTime, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HotelFiltersDialogComponent } from '../hotel-filters-dialog/hotel-filters-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { getDifferenceInDays } from '../../../../shared/utils/DateTime';
import { Page } from '../../../../shared/interfaces/page';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-hotel-reservation-container',
  templateUrl: './hotel-reservation-container.component.html',
  styleUrl: './hotel-reservation-container.component.scss',
})
export class HotelReservationContainerComponent implements OnInit {
  queryParams: HotelQueryParams;
  roomsPage: Page<HotelRoom> | undefined;
  @ViewChild('bookNow') bookNow!: ElementRef;

  readonly dialog = inject(MatDialog);
  error: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  options = [
    { name: 'Double room', value: false },
    { name: 'Twin room', value: false },
    { name: 'Single room', value: false },
    { name: 'Sea view', value: false },
    { name: 'Balcony', value: false },
    { name: 'Available', value: false },
  ];
  filterChanged = new EventEmitter<HotelFilters>();

  constructor(
    private httpService: HotelHttpService,
    readonly translateService: TranslateService,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.queryParams = {
      pageIndex: 0,
      pageSize: 5,
      checkInDate: this.addDays(new Date(), 1),
      checkOutDate: this.addDays(new Date(), 2),
      numberOfRooms: 1,
      numberOfAdults: 1,
      available: false,
      language: 'en',
      childrenAges: [],
      roomTypes: [],
      minPrice: null,
      maxPrice: null,
      roomFacilities: [],
      sort: 'ASC',
    };
  }

  ngOnInit(): void {
    this.fetchRooms();
    this.translateService.onLangChange.subscribe((event) => {
      this.queryParams.language = event.lang;
      this.fetchRooms();
    });
    this.filterChanged.pipe(debounceTime(1000)).subscribe((filters) => {
      this.onFiltersChanged(filters);
    });
    this.updateOptions();
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  private fetchRooms() {
    this.roomsPage = undefined;

    this.httpService.fetchRooms(this.queryParams).subscribe({
      next: (result) => {
        this.roomsPage = result;
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  onFiltersChanged(filters: HotelFilters) {
    this.queryParams.roomTypes = filters.roomTypes;
    this.queryParams.maxPrice = filters.maxPrice;
    this.queryParams.minPrice = filters.minPrice;
    this.queryParams.sort = filters.sort;
    this.queryParams.available = filters.available;
    this.resetPage();
    this.fetchRooms();
  }

  onPersonFilterChanged(filter: BookNowFilters) {
    this.queryParams.checkInDate = filter.checkInDate;
    this.queryParams.checkOutDate = filter.checkOutDate;
    this.queryParams.numberOfAdults = filter.numberOfAdults;
    this.queryParams.numberOfRooms = filter.numberOfRooms;
    this.fetchRooms();
  }

  openFilterDialog(): void {
    const dialogRef = this.dialog.open(HotelFiltersDialogComponent, {
      data: {
        sortOnly: false,
        filtersOnly: true,
        queryParam: this.queryParams,
      },
      position: { bottom: '0' },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result: HotelQueryParams) => {
      console.log('The dialog was closed');
      console.table(result);

      if (result !== undefined) {
        this.onFiltersChanged(result);
      }
    });
  }

  openSortDialog(): void {
    const dialogRef = this.dialog.open(HotelFiltersDialogComponent, {
      data: {
        sortOnly: true,
        filtersOnly: false,
        queryParam: this.queryParams,
      },
      position: { bottom: '0' },
      maxWidth: '100vw',
      maxHeight: '100vh',
      panelClass: 'full-screen-dialog-panel',
    });

    dialogRef.afterClosed().subscribe((result: HotelQueryParams) => {
      console.log('The dialog was closed');
      console.table(result);

      if (result !== undefined) {
        this.onFiltersChanged(result);
      }
    });
  }

  private updateOptions() {
    this.options = this.options.map((el) => {
      el.value = this.queryParams.roomTypes.indexOf(el.name) !== -1;
      return el;
    });
  }

  numberOfRequestedNights() {
    return getDifferenceInDays(
      this.queryParams.checkOutDate,
      this.queryParams.checkInDate,
    );
  }

  onPageChanged(pageEvent: PageEvent) {
    this.queryParams.pageSize = pageEvent.pageSize;
    this.queryParams.pageIndex = pageEvent.pageIndex;
    this.fetchRooms();
    this.scrollToTopOfTable();
  }

  scrollToTopOfTable() {
    this.bookNow.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  private resetPage() {
    this.queryParams.pageIndex = 0;
  }
}
