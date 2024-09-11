import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotelFilters } from '../../interfaces/HotelFilters';

@Component({
  selector: 'app-hotel-filters-dialog',
  templateUrl: './hotel-filters-dialog.component.html',
  styleUrl: './hotel-filters-dialog.component.scss',
})
export class HotelFiltersDialogComponent {
  data = inject<any>(MAT_DIALOG_DATA);
  queryParam: HotelFilters;
  filtersOnly = false;
  sortOnly = false;

  constructor(public dialogRef: MatDialogRef<HotelFiltersDialogComponent>) {
    this.filtersOnly = this.data.filtersOnly;
    this.sortOnly = this.data.sortOnly;
    this.queryParam = this.data.queryParam;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onApplyClick(): void {
    this.dialogRef.close(this.queryParam);
  }

  onFilterChanged(filters: HotelFilters): void {
    this.queryParam = filters;
  }
}
