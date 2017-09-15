import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class OrderService {
  
  userOrders: Observable<any[]>;
  orders: FirebaseListObservable<any>;
  
  constructor(private dataBase: AngularFireDatabase) {
  }
  
  getOrdersOfUser(userOrderKeys: any[]): Observable<any> {
    
  }
}