import { Component, inject } from '@angular/core';
import { HotelRoom } from '../../interfaces/room';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton } from '@angular/material/button';
import { NgForOf } from '@angular/common';
import { MatRipple } from '@angular/material/core';
import { HotelRoomDetailsImagesComponent } from '../hotel-room-details-images/hotel-room-details-images.component';

@Component({
  selector: 'app-hotel-room-details',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgForOf,
    MatFabButton,
    MatRipple,
    HotelRoomDetailsImagesComponent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './hotel-room-details.component.html',
  styleUrl: './hotel-room-details.component.scss',
})
export class HotelRoomDetailsComponent {
  room = inject<HotelRoom>(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<HotelRoomDetailsComponent>);

  onNoClick() {
    this.dialogRef.close();
  }
}
