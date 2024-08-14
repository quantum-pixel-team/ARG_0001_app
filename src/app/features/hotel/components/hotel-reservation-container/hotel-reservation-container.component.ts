import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  OnDestroy,
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
import { BreakpointObserver } from '@angular/cdk/layout';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HotelFiltersDialogComponent } from '../hotel-filters-dialog/hotel-filters-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {
  addDays,
  getDifferenceInDays,
} from '../../../../shared/utils/DateTime';
import { Page } from '../../../../shared/interfaces/page';
import { PageEvent } from '@angular/material/paginator';
import { LanguageService } from '../../../../shared/services/language.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../states/app.state';
import * as HotelSelector from '../../store/hotel.selector';
import * as HotelAction from '../../store/hotel.action';

@Component({
  selector: 'app-hotel-reservation-container',
  templateUrl: './hotel-reservation-container.component.html',
  styleUrl: './hotel-reservation-container.component.scss',
})
export class HotelReservationContainerComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  queryParams: HotelQueryParams;
  roomsPage: Page<HotelRoom> | undefined;
  @ViewChild('bookNow') bookNow!: ElementRef;

  readonly dialog = inject(MatDialog);
  error: any | undefined;

  public unsubscribe$ = new Subject<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  filterOptions = [
    { name: 'Double room', value: false },
    { name: 'Twin room', value: false },
    { name: 'Single room', value: false },
    { name: 'Sea view', value: false },
    { name: 'Balcony', value: false },
    { name: 'Available', value: false },
  ];
  filterChanged = new EventEmitter<HotelFilters>();
  bookNowFilters$: Observable<BookNowFilters>;

  constructor(
    private httpService: HotelHttpService,
    readonly languageService: LanguageService,
    private breakpointObserver: BreakpointObserver,
    private store: Store<AppState>,
  ) {
    this.queryParams = {
      pageIndex: 0,
      pageSize: 5,
      checkInDate: addDays(new Date(), 1),
      checkOutDate: addDays(new Date(), 2),
      numberOfRooms: 1,
      numberOfAdults: 1,
      available: false,
      language: languageService.currentLang,
      childrenAges: [],
      roomTypes: [],
      minPrice: null,
      maxPrice: null,
      roomFacilities: [],
      sort: null,
    };

    this.bookNowFilters$ = this.store.select(HotelSelector.selectHotelFilters);

    this.bookNowFilters$.pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: (value) => {
        this.queryParams = { ...this.queryParams, ...value };
        this.fetchRooms();
      },
    });
  }

  ngOnInit(): void {
    this.fetchRooms();

    this.updateFilterOptions();
  }

  ngAfterViewInit() {
    this.languageService.onLangChange
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((event) => {
        this.queryParams.language = event.code;
        console.log('Language changed');
        this.fetchRooms();
      });

    this.filterChanged
      .pipe(
        takeUntil(this.unsubscribe$),
        debounceTime(1000),
        distinctUntilChanged(),
      )
      .subscribe((filters) => {
        console.debug('Filters changed!');
        this.onFiltersChanged(filters);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private fetchRooms() {
    this.roomsPage = undefined;
    this.error = undefined;

    return this.httpService
      .fetchRooms(this.queryParams)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe({
        next: (result) => {
          this.roomsPage = result;
        },
        error: (error: any) => {
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

  onPersonFilterChanged(bookNowFilters: BookNowFilters) {
    this.store.dispatch(HotelAction.changeBookNowFilter({ bookNowFilters }));
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

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: HotelQueryParams) => {
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

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: HotelQueryParams) => {
        if (result !== undefined) {
          this.onFiltersChanged(result);
        }
      });
  }

  private updateFilterOptions() {
    this.filterOptions = this.filterOptions.map((el) => {
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
