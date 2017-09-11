import { User } from '../user';
import { USERLIST } from './user.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }
  getProfile(id: number): User {
    return USERLIST.find(elem => elem.id == id);
  }
}
