import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ContactUsFormComponent {
  @Input() contactUsForm: FormGroup = new FormGroup({});
  @Output() sendMessage = new EventEmitter();
  protected isValidForm() {
    return (
      this.contactUsForm.valid &&
      this.contactUsForm.get('fullName')?.dirty &&
      this.contactUsForm.get('email')?.dirty &&
      this.contactUsForm.get('messageUs')?.dirty
    );
  }
}
