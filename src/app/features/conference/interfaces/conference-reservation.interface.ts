

export interface ConferenceReservation{
  fullNameOrCompanyName:string |null,
  email:string | null,
  phoneNumber?:string | null,
  emailContent:string | null
  conferenceReservations : Partial<ConferenceDateReservation [] | null>,

}


export interface ConferenceDateReservation{
  reservationDate:Date  | null,
  numberOfAttenders: bigint | null ,
  startTime: Date | null,
  endTime:  Date | null
}

