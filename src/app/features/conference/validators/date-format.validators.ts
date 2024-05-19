import {AbstractControl, ValidationErrors} from "@angular/forms";
import {isValidDate} from "rxjs/internal/util/isDate";

import {TimeFormat} from "ngx-material-timepicker/src/app/material-timepicker/models/time-format.enum";

export function dateFormatValidators(dateControl: AbstractControl): ValidationErrors | null {

  return isValidDate(dateControl.value) ? null : {isNotDate: true}
}

export function minDateRequired(dateControl: AbstractControl): ValidationErrors | null {
    const date1 = new Date(dateControl.value);
  const specifiedDate = new Date(date1).setHours(0, 0, 0, 0);
  const date = new Date().setHours(0, 0, 0, 0)
  return specifiedDate.valueOf() >= date.valueOf() ? null : {minDate: true}
}


export function appointmentTimeValidator(control: AbstractControl,): ValidationErrors | null    {

  if (control.get('startTime')?.value == null || control.get('endTime')?.value == null) {
    return null
  }
  const startTimeControl :Date = control.get('startTime')?.value
  const endTimeControl = control.get('endTime')?.value
  console.log(startTimeControl.valueOf()  < endTimeControl.valueOf())

  return startTimeControl.valueOf()  < endTimeControl.valueOf() ? null : { timeNotValid : true };
}
