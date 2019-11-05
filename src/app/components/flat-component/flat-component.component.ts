import {Component, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'app-flat-component',
  templateUrl: './flat-component.component.html',
  styleUrls: ['./flat-component.component.css']
})
export class FlatComponentComponent {
  flatID: number = '';
  curs = fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
    .then(value => value.json())
    .then(jsonedValue => {
      const USD = jsonedValue.find(currency => {
        return currency.buy;
      })
      this.curs = USD.buy;
      return this.curs;
    })


  @Input() someFlat;
  @Output() showMoreInfo = new EventEmitter();


  showInfo(id: number) {
    this.showMoreInfo.emit(this.flatID  = id);
  }


}
