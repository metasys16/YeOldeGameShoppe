import { User } from '../model/user';
import { USERS } from '../model/mock/mock-user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }
  getProfile(id: number): User {
    return USERS.find(elem => elem.id == id);
  }
}
