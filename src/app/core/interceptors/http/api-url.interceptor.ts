import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {}

  intercept(request: HttpRequest<never>, next: HttpHandler) {
    const apiUrl = this.config.getApiUrl();
    if (environment.envName === 'mock') {
      const extension = '.json';

      const requestUrl = request.url.includes('?')
        ? request.url.slice(0, request.url.indexOf('?'))
        : request.url;
      const apiReq = request.clone({
        url: `${apiUrl}/${requestUrl}.${extension}`,
      });
      return next.handle(apiReq);
    }
    const apiReq = request.clone({ url: `${apiUrl}/${request.url}` });
    return next.handle(apiReq);
  }
}
