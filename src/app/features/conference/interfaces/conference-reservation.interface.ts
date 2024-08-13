export interface ConferenceReservation {
  fullNameOrCompanyName: string;
  email: string;
  phoneNumber: string | null;
  emailContent: string | null;
  conferenceReservations: ConferenceDateReservation[];
}

export interface ConferenceDateReservation {
  reservationDate: Date;
  numberOfAttenders: bigint;
  startTime: Date;
  endTime: Date;
}
