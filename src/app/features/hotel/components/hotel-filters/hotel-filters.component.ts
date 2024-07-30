import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { HotelFilters } from '../../interfaces/HotelFilters';

@Component({
  selector: 'app-hotel-filters',
  templateUrl: './hotel-filters.component.html',
  styleUrl: './hotel-filters.component.scss',
})
export class HotelFiltersComponent {
  options = [
    'Double room',
    'Twin room',
    'Single room',
    'Sea view',
    'Balcony',
    'Available',
  ];
  filtersForm: FormGroup;
  priceForm: FormGroup;
  sortForm: FormGroup;
  @Output() filterChange = new EventEmitter<HotelFilters>();

  constructor(private formBuilder: FormBuilder) {
    // Create a form group with controls for each option
    const filtersConfig = this.options.reduce(
      (acc, option) => {
        acc[option] = [false, Validators.required];
        return acc;
      },
      {} as { [key: string]: any },
    );

    this.filtersForm = this.formBuilder.group(filtersConfig);

    this.priceForm = this.formBuilder.group({
      minPrice: [null, [Validators.min(0)]],
      maxPrice: [null, [Validators.min(0)]],
    });

    this.sortForm = this.formBuilder.group({
      sortOrder: ['ASC'],
    });

    this.filtersForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onSelectionChange());

    this.priceForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onSelectionChange());

    this.sortForm.valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => this.onSelectionChange());
  }

  onSelectionChange() {
    const options = Object.keys(this.filtersForm.value).filter(
      (option) => this.filtersForm.value[option],
    );
    const minPrice = this.priceForm.value.minPrice;
    const maxPrice = this.priceForm.value.maxPrice;
    const sortOrder = this.sortForm.value.sortOrder;

    this.filterChange.emit({
      roomTypes: options,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sortOrder: sortOrder,
    });
  }
}
