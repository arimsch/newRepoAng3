import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card.component';
import { TuiBadgeModule, TuiInputCountModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';
import { ItemBasketComponent } from './item-basket/item-basket.component';
import { ConvertCasePipeModule } from '../format-price.pipe.ts/format-price-pipe.module';

@NgModule({
  declarations: [ItemCardComponent, ItemBasketComponent],
  exports: [ItemCardComponent, ItemBasketComponent],
  imports: [
    CommonModule,
    TuiBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    TuiInputCountModule,
    TuiButtonModule,
    ConvertCasePipeModule,
  ],
})
export class ItemModule {}
