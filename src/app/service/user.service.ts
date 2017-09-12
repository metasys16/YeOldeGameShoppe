import { User } from '../model/user';
import { USERLIST } from '../model/mock/mock-user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor() { }
  getProfile(id: number): User {
    return USERLIST.find(elem => elem.id == id);
  }
}
