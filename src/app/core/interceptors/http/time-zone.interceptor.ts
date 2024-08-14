import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TimezoneInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<never>, next: HttpHandler) {
    const timezoneOffsetMinutes = new Date().getTimezoneOffset();

    const hours = Math.floor(Math.abs(timezoneOffsetMinutes) / 60);
    const minutes = Math.abs(timezoneOffsetMinutes) % 60;

    const sign = timezoneOffsetMinutes <= 0 ? '+' : '-';

    const formattedOffset = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const modifiedReq = req.clone({
      setHeaders: {
        'Timezone-Offset': formattedOffset,
      },
    });

    return next.handle(modifiedReq);
  }
}
