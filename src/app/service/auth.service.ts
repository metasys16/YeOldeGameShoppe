import { User } from '../model/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isLoggedIn = false;
  activeUser: User;
  // store the URL so we can redirect after logging in
  redirectUrl: string;
  
  constructor(private userService: UserService) {}

  login(model: any): Observable<boolean> {
    this.userService.getUserByLogin(model).then(elem => this.activeUser = elem);
    if (typeof this.activeUser !== 'undefined') {
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    }
    else{
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}