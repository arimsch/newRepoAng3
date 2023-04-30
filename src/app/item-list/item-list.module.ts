import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { ItemModule } from '../item-card/item.module';

@NgModule({
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  imports: [CommonModule, TuiButtonModule, ItemModule],
})
export class ItemListModule {}
