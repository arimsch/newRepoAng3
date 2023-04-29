import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
export class BasketComponent implements OnInit {
  @Output()
  public changePage = new EventEmitter<null>();

  constructor(private readonly basketService: BasketService) {}

  ngOnInit(): void {
    this.basketService.initialize();
  }

  public get summary$(): Observable<number> {
    return this.basketService.sum$;
  }

  public get items$(): Observable<Item[]> {
    return this.basketService.items$;
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
