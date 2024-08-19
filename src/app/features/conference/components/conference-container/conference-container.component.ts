import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-conference-container',
  templateUrl: './conference-container.component.html',
  styleUrl: './conference-container.component.scss',
})
export class ConferenceContainerComponent implements OnInit {

  constructor(private titleService: Title,
              private metaTagService: Meta,) {
  }


  ngOnInit(): void {
    const title = 'Aragosta Hotel & Restaurant - Conference Room Booking';
    const ogTitle = 'Welcome to Aragosta Hotel & Restaurant in Durres  - Conference Room Booking ';
    this.titleService.setTitle(title);

    const keywords = 'conference, Durres, meeting, meetings, conference room, hotels near me, conference room booking,' +
      'durres, conference book, restaurants in durres, book table,  conference nearby, aragosta conference, conference durres, etc';
    const description =
      'Welcome to our conference room page! Our hotel offers state-of-the-art conference facilities for all your business needs.' +
      ' Whether you are planning a small meeting or a large corporate event, we have the perfect space for you';
    const ogDescription = "Aragosta's conference room is perfect for productive meetings and collaborations. It features comfortable seating, AV technology, high-speed internet, and modern decor, accommodating up to 35 people.";
    this.metaTagService.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      {
        property: 'og:image',
        content: 'https://aragosta-test.imgix.net/conference.png?auto=format&w=1080',
      },
      { property: 'og:url', content: 'aragosta.al/conference' },
    ]);
  }
}
