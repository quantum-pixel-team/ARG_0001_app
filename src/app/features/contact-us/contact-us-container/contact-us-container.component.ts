import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { HomeHttpService } from '../../../home/services/home-http.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactUs } from '../interface/contact-us.interface';
import { ContactUsService } from '../services/contact-us-service';
import { CommonServices } from '../../../shared/services/common.services';

@Component({
  selector: 'app-contact-us-container',
  templateUrl: './contact-us-container.component.html',
  styleUrl: './contact-us-container.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsContainerComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private homeService: HomeHttpService,
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private commonService: CommonServices,
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

  protected isValidForm() {
    return (
      this.contactUsForm.valid &&
      this.contactUsForm.controls.fullName.dirty &&
      this.contactUsForm.controls.email.dirty &&
      this.contactUsForm.controls.messageUs.dirty
    );
  }

  private createContactUs() {
    return (this.contactUs = {
      fullNameOrCompanyName: this.contactUsForm.controls.fullName.value,
      email: this.contactUsForm.controls.email.value,
      message: this.contactUsForm.controls.messageUs.value,
    });
  }

  protected saveForm() {
    this.contactUsService
      .sendContactUsMessage(this.createContactUs())
      .subscribe({ error: (err) => console.log(err) });
    this.resetContactUsForm();
  }
  private resetContactUsForm() {
    this.contactUsForm.reset();
    this.contactUsForm.controls.fullName.setErrors(null);
    this.contactUsForm.controls.email.setErrors(null);
    this.contactUsForm.controls.messageUs.setErrors(null);
  }
}
