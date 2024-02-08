import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { ConfigService } from '../../config/config.service';
import {environment} from "../../../../environments/environment";

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {}

  intercept(request: HttpRequest<never>, next: HttpHandler) {
    let extension = ''
    if(environment.envName === 'mock')
      extension = '.json'
    const apiUrl = this.config.getApiUrl();
    const apiReq = request.clone({ url: `${apiUrl}/${request.url}${extension}` });
    return next.handle(apiReq);
  }
}
