import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  user ={
    name: '',
    surname: '',
    email: '',
    password: '',
    is_blocked: ''
  }

  constructor() { }

  @Input() userToLogin;
  @Output() loginUser = new EventEmitter();

  loginThisUser() {
    this.loginUser.emit(this.userToLogin = this.user);
  }
}
