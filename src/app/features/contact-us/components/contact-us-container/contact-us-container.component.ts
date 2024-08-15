import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { HomeHttpService } from '../../../../home/services/home-http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUs } from '../../interface/contact-us.interface';
import { ContactUsService } from '../../services/contact-us-service';
import { CommonServices } from '../../../../shared/services/common.services';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us-container',
  templateUrl: './contact-us-container.component.html',
  styleUrl: './contact-us-container.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsContainerComponent implements OnInit{
  constructor(
    private breakpointObserver: BreakpointObserver,
    private homeService: HomeHttpService,
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private commonService: CommonServices,
    private titleService: Title,
    private metaTagService: Meta,
  ) {}

  private contactUs?: ContactUs;

  protected contactUsForm = this.fb.nonNullable.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$'),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    messageUs: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1500),
      ],
    ],
  });

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, '(max-width: 700px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  protected navigateToMaps() {
    this.homeService.navigateToArgLocation();
  }

  protected openWhatsapp() {
    this.commonService.openWhatsapp();
  }

  private createContactUs() {
    this.contactUs = {
      fullNameOrCompanyName: this.contactUsForm.controls.fullName.value,
      email: this.contactUsForm.controls.email.value,
      message: this.contactUsForm.controls.messageUs.value,
    };
    return this.contactUs;
  }

  protected sendMessage() {
    this.contactUsService
      .sendContactUsMessage(this.createContactUs())
      .subscribe({ error: (err) => console.debug(err) });
    this.resetContactUsForm();
  }

  private resetContactUsForm() {
    this.contactUsForm.reset();
    this.contactUsForm.controls.fullName.setErrors(null);
    this.contactUsForm.controls.email.setErrors(null);
    this.contactUsForm.controls.messageUs.setErrors(null);
  }

  ngOnInit(): void {
    const title = 'Aragosta Hotel & Restaurant - Contuct Us';
    const ogTitle = 'Welcome to Aragosta Hotel & Restaurant in Durres  - Contact Us ';

    this.titleService.setTitle(title);

    const keywords =
      'Hotel, Durres, Serives, Restaurant, book, free parking, private beach, relaxing dining, conferece room, modern amenities,' +
      'hotels, durres, restaurant, beach, hotel durres, booking, hotels near me,' +
      'cheap hotels, aragosta hotel, hotel rooms, booking hotel, hotels in durres, hotel near beach,contact,contuct us, email,phone,aragosta contact etc';
    const description = "Want to get in touch? We'd love to hear from you. Here's how you can reach us.";
    const ogDescription = "We value our guests' feedback and are always happy to assist with any inquiries." +
      " We look forward to hearing from you and making your stay at our hotel a memorable one.";
    this.metaTagService.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: ogDescription },
      {
        property: 'og:image',
        content: 'https://aragosta-test.imgix.net/location.jpg?format=compress&auto=format',
      },
      { property: 'og:url', content: 'aragosta.al/contact-us' },
    ]);
   }
  }

