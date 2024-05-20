import { Component } from '@angular/core';
import { HomeHttpService } from '../../services/home-http.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import {CommonServices} from "../../../shared/services/common.services";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrl: './home-container.component.scss',
})
export class HomeContainerComponent {
  constructor(private commonService: CommonServices) {}

  onLocationClicked() {
    this.commonService.navigateToArgLocation();
  }
}
