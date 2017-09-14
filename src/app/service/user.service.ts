import { User } from '../model/user';
import { USERS } from '../model/mock/mock-user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  
  user: Observable<User>;
  
  constructor(private dataBase: AngularFireDatabase) {}
  
  getUser(id: number): Promise<User> {
    this.user = this.dataBase.object('/user/${id}');
    return this.user.toPromise();
  }
  getUserByLogin(model: any): Promise<User> {
    return Promise.resolve(USERS.find(elem => elem.userName === model.username && elem.password === model.password));
  }
}
