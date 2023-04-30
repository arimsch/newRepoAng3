import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { InjectionToken } from '@angular/core';

export const IItemsApiServiceToken = new InjectionToken('IItemsApiService');

export interface IItemsApiService {
  getAll(): Observable<Item[]>;
}
