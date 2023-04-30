import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../shared/models/item';

@Component({
  selector: 'app-item-basket',
  templateUrl: './item-basket.component.html',
  styleUrls: ['./item-basket.component.less'],
})
export class ItemBasketComponent {
  @Input()
  public item!: Item;
  @Input()
  public courseSymbol!: string;

  @Output()
  public update = new EventEmitter<Item>();
  @Output()
  public delete = new EventEmitter<Item>();

  public extended = false;

  public updateItem(item: Item): void {
    this.update.emit(item);
    this.extended = false;
  }

  public deleteItem(): void {
    this.delete.emit(this.item);
  }

  public toggleExtended(): void {
    this.extended = !this.extended;
  }
}
