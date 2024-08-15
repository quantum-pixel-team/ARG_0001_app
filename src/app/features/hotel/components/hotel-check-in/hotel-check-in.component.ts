import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { BookNowFilters } from '../../interfaces/HotelFilters';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-hotel-check-in',
  templateUrl: './hotel-check-in.component.html',
  styleUrl: './hotel-check-in.component.scss',
})
export class HotelCheckInComponent implements OnInit {
  @Output() $bookNowFiltersEvent = new EventEmitter<BookNowFilters>();
  bookNowFiltersEvent!: BookNowFilters;
  @Input() bookNowFiltersEventInput!: BookNowFilters;

  bookingForm = this.fb.group({
    age: this.fb.array([]),
  });

  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.bookNowFiltersEvent = structuredClone(this.bookNowFiltersEventInput);
    for (let i = 0; i < this.bookNowFiltersEventInput.numberOfChildren; i++) {
      this.addChild();
    }
  }

  get age(): FormArray {
    return this.bookingForm.get('age') as FormArray;
  }

  addChild() {
    this.bookNowFiltersEvent.childrenAges.push(0);
    this.bookingForm.controls.age.push(new FormControl(0));
  }

  addAge(index: number, age: number) {
    this.bookNowFiltersEvent.childrenAges[index] = age;
  }

  removeChild(index: number) {
    this.age.removeAt(index);
  }

  onQuantityChange(quantity: number, type: string) {
    switch (type) {
      case 'adults':
        this.bookNowFiltersEvent.numberOfAdults = quantity;
        break;
      case 'children':
        if (quantity > this.bookNowFiltersEvent.numberOfChildren.valueOf()) {
          this.addChild();
        } else {
          this.removeChild(quantity);
        }
        this.bookNowFiltersEvent.numberOfChildren = quantity;
        break;
      case 'rooms':
        this.bookNowFiltersEvent.numberOfRooms = quantity;
        break;
      default:
        break;
    }
    if (type.includes('ages')) {
      const index = Number(type.charAt(4));
      this.addAge(index, quantity);
    }
  }

  onCheckInClicked() {
    this.$bookNowFiltersEvent.emit(structuredClone(this.bookNowFiltersEvent));
  }

  onCheckInChanged($event: Date) {
    this.bookNowFiltersEvent.checkInDate = $event;
  }

  onCHeckOutChanged($event: Date) {
    this.bookNowFiltersEvent.checkOutDate = $event;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 700px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );
}
