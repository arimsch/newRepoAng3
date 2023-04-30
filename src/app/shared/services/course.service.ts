import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course';
import { URL_COURSE } from '../url-names';

const INIT_SYMBOL = 'RUB';

@Injectable()
export class CourseService {
  constructor(private readonly _http: HttpClient) {}

  public fetchCourse(nameCurrency: string): Observable<Course> {
    return this._http.get<Course>(
      `${URL_COURSE}/latest?symbols=${INIT_SYMBOL}&base=${nameCurrency}`
    );
  }
}
