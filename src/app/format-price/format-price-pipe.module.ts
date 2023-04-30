import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from './format-price.pipe';

@NgModule({
  declarations: [FormatPricePipe],
  exports: [FormatPricePipe],
  imports: [CommonModule],
})
export class ConvertCasePipeModule {}
