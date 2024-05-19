

export interface ConferenceReservation{
  fullNameOrCompanyName:string ,
  email:string ,
  phoneNumber:string | null,
  emailContent:string | null
  conferenceReservations : Partial<ConferenceDateReservation [] | null>,

}


export interface ConferenceDateReservation{
  reservationDate:Date  | null,
  numberOfAttenders: bigint | null ,
  startTime: Date | null,
  endTime:  Date | null
}

