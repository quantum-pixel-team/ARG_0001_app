import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatRipple} from "@angular/material/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-hotel-room-policy',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatIcon,
    MatRipple,
    TranslateModule,
  ],
  templateUrl: './hotel-room-policy.component.html',
  styleUrl: './hotel-room-policy.component.scss',
})
export class HotelRoomPolicyComponent {}
