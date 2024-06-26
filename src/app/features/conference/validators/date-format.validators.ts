import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { isValidDate } from 'rxjs/internal/util/isDate';

export function minDateRequired(
  dateControl: AbstractControl,
): ValidationErrors | null {
  const date1 = new Date(dateControl.value);
  const specifiedDate = new Date(date1).setHours(0, 0, 0, 0);
  const date = new Date().setHours(0, 0, 0, 0);
  return specifiedDate.valueOf() >= date.valueOf() ? null : { minDate: true };
}

export function appointmentTimeValidator(
  control: AbstractControl,
): ValidationErrors | null {
  if (
    control.get('startTime')?.value == null ||
    control.get('endTime')?.value == null
  ) {
    return null;
  }
  const startTimeControl: Date = control.get('startTime')?.value;
  const endTimeControl: Date = control.get('endTime')?.value;

  return startTimeControl.valueOf() < endTimeControl.valueOf()
    ? null
    : { timeNotValid: true };
}

export function startTimeValidator(
  control: AbstractControl,
): ValidationErrors | null {
  if (
    control.get('startTime')?.value == null ||
    control.get('reservationDate')?.value == null
  ) {
    return null;
  }
  const [hours, minutes] = control.get('startTime')?.value.split(':');
  const reservationDate: Date = control.get('reservationDate')?.value;
  const currentTime: Date = new Date();
  const reservationTime: Date = new Date();
  reservationTime.setHours(+hours, +minutes);
  if (reservationDate <= currentTime) {
    return reservationTime > currentTime ? null : { timeNotInPast: true };
  }
  return null;
}
