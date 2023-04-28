import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseApi } from '../models/courses-api-response';

@Injectable()
export class CourseService {
  constructor(private readonly _http: HttpClient) {}
  public fetchCourse(nameCurrency: string): Observable<CourseApi> {
    return this._http.get<CourseApi>(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=RUB&base=${nameCurrency}`
    );
  }
}
