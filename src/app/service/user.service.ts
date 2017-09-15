import { User } from '../model/user';
import { USERS } from '../model/mock/mock-user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  
  user: FirebaseObjectObservable<any>;
  
  constructor(private dataBase: AngularFireDatabase) {}
  
  getUser(userName: string): FirebaseObjectObservable<any> {
    return this.dataBase.object('/users/' + userName);
  }
  
  getUserByLogin(mail: string): Promise<User> {
    return Promise.resolve(USERS.find(elem => elem.mail === mail));
  }
}
