import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BasketService } from '../shared/services/basket.service';
import { Item } from '../shared/models/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasketComponent implements OnInit, OnDestroy {
  @Output()
  public changePage = new EventEmitter<null>();

  constructor(private readonly basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.initialize();
    this.basketService.items$.subscribe(() => {
      this.items;
    });
  }

  ngOnDestroy(): void {
    this.basketService.items$.unsubscribe();
  }

  public get summary$(): Observable<number> {
    return this.basketService.sum$;
  }

  public get items(): Item[] {
    return this.basketService.selectedItems;
  }

  public get currencySymbol$(): Observable<string> {
    return this.basketService.currency$;
  }

  public togglePage(): void {
    this.changePage.emit(null);
  }

  public deleteItem(item: Item): void {
    this.basketService.deleteItem(item);
  }

  public updateItem(item: Item): void {
    this.basketService.updateItem(item);
  }
}
