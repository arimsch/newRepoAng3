import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInfo } from '../models/country-info';
import { URL_COUNTRY } from '../url-names';

@Injectable()
export class CountriesService {
  constructor(private readonly _http: HttpClient) {}

  public fetchNameCurrencies(): Observable<CountryInfo[]> {
    return this._http.get<CountryInfo[]>(
      `${URL_COUNTRY}/all?fields=name,currencies`
    );
  }
}
