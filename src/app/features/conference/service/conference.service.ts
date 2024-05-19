import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConferenceReservation} from "../interfaces/conference-reservation.interface";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class ConferenceService{
  constructor(private http: HttpClient) {}

  saveConferenceReservation(reservation : Partial<ConferenceReservation>):Observable<unknown> {
    const headers = {headers: {'Content-Type':'application/json'}}
    return this.http.post('contact-us/email',reservation,headers)
  }
}
