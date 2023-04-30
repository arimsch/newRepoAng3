import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../shared/models/item';
import { BasketService } from '../shared/services/basket.service';
import { Subject } from 'rxjs';
import { ItemsApiService } from '../shared/services/items-api.services';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
})
export class ItemListComponent implements OnInit {
  @Output() public changePage = new EventEmitter<null>();

  readonly itemsDB$ = new Subject<Item[]>();
  constructor(
    private readonly basketService: BasketService,
    private readonly itemsApiService: ItemsApiService
  ) {}

  ngOnInit(): void {
    this.getAllItems();
  }

  public togglePage(): void {
    this.changePage.emit(null);
  }

  public addItem(item: Item): void {
    this.basketService.addSelectedItem(item);
  }

  private getAllItems(): void {
    this.itemsApiService.getAll().subscribe(items => this.itemsDB$.next(items));
  }
}
