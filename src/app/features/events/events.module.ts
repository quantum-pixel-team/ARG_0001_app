import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {EventsContainerComponent} from "./components/events-cotainer/events-container.component";
import {EventCardComponent} from "./components/event-card/event-card.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatRipple} from "@angular/material/core";

@NgModule({
  declarations: [EventsContainerComponent, EventCardComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTabsModule, MatRipple]
})
export class EventsModule {
}
