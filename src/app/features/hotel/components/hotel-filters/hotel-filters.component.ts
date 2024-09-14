import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelFilters } from '../../interfaces/HotelFilters';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-hotel-filters',
  templateUrl: './hotel-filters.component.html',
  styleUrl: './hotel-filters.component.scss',
})
export class HotelFiltersComponent implements OnInit {
  availableCheckBox = { label: 'Available', checked: false };
  checkboxes = [
    { label: 'Double_room', checked: false },
    { label: 'Twin_room', checked: false },
    { label: 'Single_room', checked: false },
    { label: 'Sea_view', checked: false },
    { label: 'Balcony', checked: false },
  ];
  priceForm: FormGroup;
  sortForm: FormGroup;
  @Output() filterChanged = new EventEmitter<HotelFilters>();
  @Input() filters!: HotelFilters;
  @Input() mobile = false;
  @Input() filtersOnly = false;
  @Input() sortOnly = false;

  constructor(private fb: FormBuilder) {
    this.priceForm = this.fb.group({
      minPrice: [null, [Validators.min(0)]],
      maxPrice: [null, [Validators.min(0)]],
    });

    this.sortForm = this.fb.group({
      sortOrder: null,
    });

    this.priceForm.valueChanges.subscribe(() => {
      if (this.priceForm.invalid) return;
      this.onSelectionChange();
    });

    this.sortForm.valueChanges.subscribe(() => this.onSelectionChange());
  }

  ngOnInit() {
    this.checkboxes = this.checkboxes
      .map((el) => {
        el.checked = this.filters.roomTypes.indexOf(el.label) !== -1;
        return el;
      })
      .map((checkbox) => ({ ...checkbox }));

    this.availableCheckBox.checked = this.filters.available;

    this.priceForm.setValue({
      minPrice: this.filters.minPrice,
      maxPrice: this.filters.maxPrice,
    });
    this.sortForm.setValue({
      sortOrder: this.filters.sort,
    });
  }

  onCheckboxChange(checkbox: any, $event: MatCheckboxChange) {
    checkbox.checked = $event.checked;
    console.log(checkbox, $event);
    this.onSelectionChange();
  }

  onSelectionChange() {
    const options = this.checkboxes
      .filter((option) => option.checked)
      .map((el) => el.label);
    this.priceForm.value.minPrice =
      this.priceForm.value.minPrice?.value < 0
        ? 0
        : this.priceForm.value.minPrice?.value;
    const minPrice = this.priceForm.value.minPrice;
    const maxPrice = this.priceForm.value.maxPrice;
    const sortOrder = this.sortForm.value.sortOrder;
    const available = this.availableCheckBox.checked;

    this.filterChanged.emit({
      roomTypes: options,
      minPrice: minPrice,
      maxPrice: maxPrice,
      sort: sortOrder,
      available: available,
    });
  }
}
