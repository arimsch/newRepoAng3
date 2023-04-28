import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Item } from '../shared/models/item';
import { BasketService } from '../shared/services/basket.service';
import { ItemsApiService } from '../shared/services/items-api.services';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.less'],
})
export class ItemListComponent {
  @Output()
  changePage = new EventEmitter<null>();

  public items: Item[] = [
    {
      id: 1,
      title: 'weed',
      price: 40,
      count: 1,
    },
  ];

  constructor(
    private readonly basketService: BasketService,
    private readonly itemsApiService: ItemsApiService
  ) {}

  // ngOnInit(): void {
  //   this.itemsApiService.getAll().subscribe(data => console.log(data));
  // }

  public togglePage(): void {
    this.changePage.emit(null);
  }

  public addItem(item: Item): void {
    this.basketService.addSelectedItem(item);
  }
}
