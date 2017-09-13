import { User } from '../model/user';
import { USERS } from '../model/mock/mock-user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor() { }
  getUser(id: number): Promise<User> {
    return Promise.resolve(USERS.find(elem => elem.id === id));
  }
  getMyProfile(): User {
    return null;
  }
}
