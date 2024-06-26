export interface ReservationDetails {
  name: string;
  phoneNumber: string;
  guests: number;
  date: Date;
  time: string;
  message?: string;
  languageCode?: 'en' | 'sq';
  to: string;
}
