export function getDifferenceInDays(date1: Date, date2: Date): number {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // Hours * Minutes * Seconds * Milliseconds
  const differenceInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(differenceInMilliseconds / oneDayInMilliseconds);
}

export function addDays(date: Date, days: number): Date {
  date.setDate(date.getDate() + days);
  return date;
}
