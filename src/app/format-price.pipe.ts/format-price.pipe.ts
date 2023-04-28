import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number, args?: string): string {
    const defaultCourse = 'Р';
    if (!args) {
      return `${value}${defaultCourse}`;
    } else {
      return `${value}${args}`;
    }
  }
}
