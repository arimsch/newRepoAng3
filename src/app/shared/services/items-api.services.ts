import { Item } from '../models/item';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItemsApiService } from '../interfaces/i-items-api-service';

const host = 'http://localhost:3000/items';

@Injectable()
export class ItemsApiService implements IItemsApiService {
  constructor(private readonly httpClient: HttpClient) {}
  public getAll(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(host);
  }
}
