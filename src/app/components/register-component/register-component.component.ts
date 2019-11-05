import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  messageRegister:string = '';

  constructor() { }

  @Input() userToRegister;
  @Output() registerUser = new EventEmitter();

  user ={
    name: '',
    surname: '',
    email: '',
    password: '',
    is_blocked: ''
  }

  registerThisUser() {
    this.registerUser.emit(this.userToRegister = this.user);
  }
}
