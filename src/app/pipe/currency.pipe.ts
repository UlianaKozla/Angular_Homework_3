import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform{

  transform (value: number, num: number) {
    return Math.floor(value / num) + `$`;
  }
}
