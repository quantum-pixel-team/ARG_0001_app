import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  apiUrl: string = environment.api;

  getApiUrl(): string {
    return `${this.apiUrl}/api/v1`;
  }
}
