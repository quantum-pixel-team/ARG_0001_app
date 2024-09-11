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

export function minMaxTimeValidator(
  control: FormControl,
): { [key: string]: boolean } | null {
  const selectedTime = new Date();

  const [hours, minutes] = control.value.split(':');
  selectedTime.setHours(+hours, +minutes);
  if (!control.value) return null;

  const tiraneTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Tirane',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(selectedTime);
  const tiraneHours = Number(tiraneTime.split(':')[0]);
  if (tiraneHours < 12 || tiraneHours > 22) {
    return { minMax: true };
  }
  return null;
}
