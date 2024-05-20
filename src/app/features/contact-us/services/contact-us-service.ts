import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ContactUs} from "../interface/contact-us.interface";

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {

  constructor(private http:HttpClient) {
  }

  public sendContactUsMessage(contactUs:ContactUs){
    const headers = {headers: {'Content-Type':'application/json'}}
    return this.http.post("contact-us/contact-us-message",contactUs,headers)
  }

}
