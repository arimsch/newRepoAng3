import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs';
import { Country } from '../classes/country';
import { CourseService } from './course.service';

@Injectable()
export class BasketService {
  private _selectedItems: Item[] = [];
  private _summary = 0;

  readonly items$ = new BehaviorSubject<Item[]>(this._selectedItems);
  readonly currency$ = new BehaviorSubject<string>('Р');
  readonly sum$ = new BehaviorSubject<number>(this._summary);

  constructor(private readonly courseService: CourseService) {}

  public get selectedItems(): Item[] {
    return this._selectedItems;
  }

  public initialize(): void {
    this.updateSummary();
    this.items$.subscribe(() => {
      this.updateSummary();
    });
  }

  public addSelectedItem(item: Item): void {
    const itemInd = this.getIndex(item);
    if (itemInd >= 0) {
      if (this._selectedItems[itemInd].count) {
        this._selectedItems[itemInd].count! += item.count!;
      } else {
        this._selectedItems[itemInd].count = item.count;
      }
    } else {
      this._selectedItems.push(item);
    }
  }

  public deleteItem(item: Item): void {
    this._selectedItems.splice(this.getIndex(item), 1);
    this.items$.next(this._selectedItems);
  }

  public updateItem(item: Item): void {
    this._selectedItems[this.getIndex(item)].count = item.count;
    this.items$.next(this._selectedItems);
  }

  public updateCountry(country: Country): void {
    const { courseSymbol, courseName } = country;
    if (this.currency$.getValue() !== courseSymbol) {
      this.currency$.next(courseSymbol);
      this.courseService.fetchCourse(courseName).subscribe(data => {
        this.sum$.next(
          Math.round((this._summary / Object.values(data.rates)[0]) * 100) / 100
        );
      });
    }
  }
  private getIndex(item: Item): number {
    return this._selectedItems.findIndex(el => el.id === item.id);
  }

  private updateSummary(): void {
    this._summary = this._selectedItems.reduce(
      (sum, i) => i.price * i.count! + sum,
      0
    );
    this.sum$.next(this._summary);
  }
}
