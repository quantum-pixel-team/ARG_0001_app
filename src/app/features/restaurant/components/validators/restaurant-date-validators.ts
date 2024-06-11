import { FormControl } from '@angular/forms';

export function futureDateValidator(
  control: FormControl,
): { [key: string]: boolean } | null {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  const selectedDate = new Date(control.value);
  selectedDate.setHours(0, 0, 0, 0);

  if (selectedDate < currentDate) {
    return { pastDate: true };
  }
  return null;
}

export function futureTimeValidator(
  control: FormControl,
): { [key: string]: boolean } | null {
  const currentTime = new Date();
  const selectedTime = new Date();
  currentTime.setHours(0, 0, 0, 0);

  const [hours, minutes] = control.value.split(':');
  selectedTime.setHours(+hours, +minutes);
  if (selectedTime < currentTime) {
    return { pastTime: true };
  }
  return null;
}
