import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let request;
    if (req.url.includes('https://api.apilayer.com/exchangerates_data')) {
      request = req.clone({
        headers: req.headers.set('apikey', 'AveYtxPbYVGeyzc4SjMP2hFz4ZOF3fp3'),
      });
      return next.handle(request);
    } else {
      request = req.clone(req);
    }
    return next.handle(request);
  }
}
