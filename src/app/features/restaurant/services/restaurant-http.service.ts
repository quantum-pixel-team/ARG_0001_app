import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ReservationDetails } from "../interfaces/RestaurantReservation";

@Injectable({
  providedIn: 'root'
})
export class RestaurantHttpService {

  constructor(
    private http: HttpClient
  ) { }


  sendMessage(messageObj: ReservationDetails): Observable<any> {
   return this.http.post("whatsapp/send",messageObj)
  }
}
