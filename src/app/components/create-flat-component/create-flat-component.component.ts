import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create-flat-component',
  templateUrl: './create-flat-component.component.html',
  styleUrls: ['./create-flat-component.component.css']
})
export class CreateFlatComponentComponent implements OnInit {

  messageRegister:string = '';

  constructor() { }

  @Input() flatToCreate;
  @Output() createFlat = new EventEmitter();

  flat = {
    id: Math.floor(Math.random()*10000, 0),
    city: '',
    sqM: '',
    price: '',
    roomcount: '',
    owner: {}
  }

  createThisFlat() {
    this.createFlat.emit(this.flatToCreate = this.flat);
  }
}
