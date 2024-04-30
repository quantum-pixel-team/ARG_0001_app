import {Component} from '@angular/core';
import {Event} from "../../interfaces/event";


@Component({
  selector: 'app-home-events',
  templateUrl: './home-events.component.html',
  styleUrl: './home-events.component.scss',
})
export class HomeEventsComponent {
  events: Event[] = this.getTopEvents()


  private getTopEvents(): Event[] {
    return [
      {
        name: "Live Music Night",
        featureImageUrl: "https://th.bing.com/th/id/OIG3.oMLbRfaOch7YXEHdvfje?pid=ImgGn",
        description: ""
      },
      {
        name: "Christmas Event",
        featureImageUrl: "https://th.bing.com/th/id/OIG4.4MYkzMnhX4ynr_T88yeM?w=1024&h=1024&rs=1&pid=ImgDetMain",
        description: ""
      },
      {
        name: "New Year Party",
        featureImageUrl: "https://th.bing.com/th/id/OIG3.VPdBiYB0T3AkqKLSZhDq?w=1024&h=1024&rs=1&pid=ImgDetMain",
        description: ""
      }
    ]
  }
}
