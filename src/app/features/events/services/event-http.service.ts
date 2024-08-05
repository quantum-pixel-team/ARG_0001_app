import { Injectable } from '@angular/core';
import { AppEvent } from '../interfaces/app-event';
import { HttpClient } from '@angular/common/http';
import { Page } from '../../../shared/interfaces/page';

@Injectable({
  providedIn: 'root',
})
export class EventHttpService {
  constructor(private http: HttpClient) {}

  fetchUpcomingEvents(params: string) {
    return this.http.get<Page<AppEvent>>(`events?eventType=upcoming&${params}`);
  }
  fetchRecentEvents(params: string) {
    return this.http.get<Page<AppEvent>>(`events?eventType=recent&${params}`);
  }

  fetchTopEvents(languageCode: string) {
    return this.http.get<Page<AppEvent>>(`events?language=${languageCode}`);
  }
}
