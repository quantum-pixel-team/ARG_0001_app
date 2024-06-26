import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { FormBuilder, Validators } from '@angular/forms';
import { ConferenceService } from '../../service/conference.service';
import {
  ConferenceDateReservation,
  ConferenceReservation,
} from '../../interfaces/conference-reservation.interface';
import {
  appointmentTimeValidator,
  minDateRequired,
  startTimeValidator,
} from '../../validators/date-format.validators';

@Component({
  selector: 'app-conference-booking',
  templateUrl: './conference-booking.component.html',
  styleUrl: './conference-booking.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ConferenceBookingComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private fb: FormBuilder,
    private conferenceService: ConferenceService,
  ) {}

  protected currentDate: Date = new Date();

  private conference: ConferenceDateReservation = {
    endTime: null,
    numberOfAttenders: null,
    reservationDate: null,
    startTime: null,
  };
  protected conferenceAppointment?: ConferenceReservation;

  ngOnInit(): void {
    this.deleteConferenceAppointment(0);
  }

  protected conferenceForm = this.fb.nonNullable.group(
    {
      fullNameOrCompanyName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        null,
        Validators.pattern(
          '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
        ),
      ],
      reservationDate: [null, [Validators.required, minDateRequired]],
      numberOfAttenders: [
        null,
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]],
      emailContent: null,
      conferenceReservations: this.fb.array([
        this.createReservation(this.conference),
      ]),
    },
    { validators: [appointmentTimeValidator, startTimeValidator] },
  );

  private createReservation(conference: ConferenceDateReservation) {
    return this.fb.nonNullable.group({
      reservationDate: conference.reservationDate,
      numberOfAttenders: conference.numberOfAttenders,
      startTime: conference.startTime,
      endTime: conference.endTime,
    });
  }

  protected isMobileWidth$: Observable<boolean> = this.breakpointObserver
    .observe(['(max-width: 700px)'])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  protected submitForm(): void {
    this.conferenceService
      .saveConferenceReservation(this.createConferenceAppointment())
      .subscribe({
        error: (err) => console.log(err),
      });
    this.resetConferenceAppointment();
  }

  protected createConferenceAppointment() {
    return (this.conferenceAppointment = {
      fullNameOrCompanyName:
        this.conferenceForm.controls.fullNameOrCompanyName.value,
      email: this.conferenceForm.controls.email.value,
      phoneNumber: this.conferenceForm.controls.phoneNumber.value,
      emailContent: this.conferenceForm.controls.emailContent.value,
      conferenceReservations:
        this.conferenceForm.controls.conferenceReservations.getRawValue(),
    });
  }

  protected primary: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: '#de4a1c',
    },
    dial: {
      dialBackgroundColor: '#de4a1c',
    },
    clockFace: {
      clockFaceBackgroundColor: '#F5E1CA',
      clockHandColor: '#9fbd90',
      clockFaceTimeInactiveColor: '#de4a1c',
    },
  };

  protected getControl(controlName: string) {
    return this.conferenceForm.get(controlName);
  }

  protected addReservationDate() {
    this.conference = {
      reservationDate: this.conferenceForm.controls.reservationDate.value,
      numberOfAttenders: this.conferenceForm.controls.numberOfAttenders.value,
      startTime: this.conferenceForm.controls.startTime.value,
      endTime: this.conferenceForm.controls.endTime.value,
    };
    this.conferenceForm.controls.conferenceReservations.push(
      this.createReservation(this.conference),
    );
    this.conferenceForm.controls.reservationDate.reset();
    this.conferenceForm.controls.startTime.reset();
    this.conferenceForm.controls.endTime.reset();
  }

  private resetConferenceAppointment() {
    this.conferenceForm.reset();
    this.conferenceForm.controls.conferenceReservations.clear();
    this.conferenceForm.controls.fullNameOrCompanyName.setErrors(null);
    this.conferenceForm.controls.email.setErrors(null);
    this.conferenceForm.controls.reservationDate.setErrors(null);
    this.conferenceForm.controls.startTime.setErrors(null);
    this.conferenceForm.controls.endTime.setErrors(null);
  }

  protected deleteConferenceAppointment(i: number) {
    this.conferenceForm.controls.conferenceReservations.removeAt(i);
  }

  protected disableConferenceAddAppointment() {
    return !(
      this.conferenceForm.controls.reservationDate.valid &&
      this.conferenceForm.controls.numberOfAttenders.valid &&
      this.conferenceForm.controls.startTime.valid &&
      this.conferenceForm.controls.endTime.valid &&
      this.isTimeRangeValid()
    );
  }

  protected isValid() {
    console.log(this.conferenceForm.controls.fullNameOrCompanyName.valid);
    return (
      this.conferenceForm.controls.conferenceReservations.length >= 1 &&
      this.conferenceForm.controls.fullNameOrCompanyName.valid &&
      this.conferenceForm.controls.email.valid &&
      this.conferenceForm.controls.emailContent.valid
    );
  }

  private isTimeRangeValid() {
    return this.conferenceForm.getError('timeNotValid') == null;
  }
}
