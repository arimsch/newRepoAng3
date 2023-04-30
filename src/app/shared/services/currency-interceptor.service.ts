import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_COURSE } from '../url-names';

const API_KEY_COURSE = 'AveYtxPbYVGeyzc4SjMP2hFz4ZOF3fp3';
@Injectable({
  providedIn: 'root',
})
export class CurrencyInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request;
    if (req.url.includes(URL_COURSE)) {
      request = req.clone({
        headers: req.headers.set('apikey', API_KEY_COURSE),
      });
      return next.handle(request);
    } else {
      request = req.clone(req);
    }
    return next.handle(request);
  }
}
