import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryApi } from '../models/countries-api-response';

@Injectable()
export class CountriesService {
  constructor(private readonly _http: HttpClient) {}

  public fetchCountries(): Observable<CountryApi[]> {
    return this._http.get<CountryApi[]>(
      'https://restcountries.com/v3.1/all?fields=name,currencies'
    );
  }
}
