import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { ItemModule } from '../item-card/item.module';
import { AddOrderModule } from '../add-order/add-order.module';
import { ConvertCasePipeModule } from '../format-price.pipe.ts/format-price-pipe.module';

@NgModule({
  declarations: [BasketComponent],
  exports: [BasketComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    ItemModule,
    AddOrderModule,
    ConvertCasePipeModule,
  ],
})
export class BasketModule {}
