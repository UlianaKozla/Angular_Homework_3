import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageLogin: string = '';
  messageRegister: string = '';
  messageCreateFlat: string = '';
  randomUser: object = '';

  visabilityLogin: boolean = false;
  visabilityRegister: boolean = false;
  visabilityCreateFlat: boolean = false;
  visabilityShowAll: boolean = false;

  users = [
    {
      name: 'Uliana',
      surname: 'Kozla',
      email: 'hello@net.com',
      password: '1111',
      is_blocked: true
    },
    {
      name: 'Ira',
      surname: 'Vitia',
      email: 'byebye@gmail.com',
      password: 'byebye',
      is_blocked: false
    },
    {
      name: 'Oleh',
      surname: 'Derkach',
      email: 'derkach@gmail.com',
      password: '11111',
      is_blocked: false
    },
    {
      name: 'Ihor',
      surname: 'Bardach',
      email: 'bardach@ukr.net',
      password: 'bardach',
      is_blocked: false
    }
  ]

  flats = [
    {
      id: 1,
      city: "Lviv",
      sqM: 80,
      price: 1000000,
      roomcount: 2,
      owner: this.users[0]
    },
    {
      id: 2,
      city: "Kyiv",
      sqM: 60,
      price: 1100000,
      roomcount: 1,
      owner: this.users[1]
    },
    {
      id: 3,
      city: "Odesa",
      sqM: 120,
      price: 1250000,
      roomcount: 3,
      owner: this.users[2]
    },
    {
      id: 4,
      city: "Odesa",
      sqM: 60,
      price: 400000,
      roomcount: 2,
      owner: this.users[3]
    }
  ]

  renderLogin() {
    this.visabilityLogin = !this.visabilityLogin;
    this.visabilityRegister = false;
    this.visabilityCreateFlat = false;
    this.visabilityShowAll = false;
  }

  renderRegister() {
    this.visabilityRegister = !this.visabilityRegister;
    this.visabilityLogin = false;
    this.visabilityCreateFlat = false;
    this.visabilityShowAll = false;
  }

  renderCreateFlat() {
    this.visabilityCreateFlat = !this.visabilityCreateFlat;
    this.visabilityRegister = false;
    this.visabilityLogin = false;
    this.visabilityShowAll = false;
  }

  renderShowAll() {
    this.visabilityShowAll = !this.visabilityShowAll;
    this.visabilityRegister = false;
    this.visabilityLogin = false;
    this.visabilityCreateFlat = false;
  }

  showFlatInfo(id: number) {
    console.log(id);
  }

  registration(user:object) {
    console.log(user);
    this.users.push(user);
    this.messageRegister = `User ${user.name} was created`
    console.log(this.users);
  }

  logination(thisUser: object) {
    const loginedUser = this.users.find( logUser => {
      return logUser.email === thisUser.email && logUser.password === thisUser.password
    });
    loginedUser ? this.messageLogin = 'Welcome' : this.messageLogin = 'User is not found'
    console.log(loginedUser);
  }

  createFlat(flat: object){
    this.randomUser = Math.floor(Math.random() * (this.users.length - 1), 0);
    flat.owner = this.users[this.randomUser];
    this.flats.push(flat);
    this.messageCreateFlat = 'Flat was created';
  }
}
