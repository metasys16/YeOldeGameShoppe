import * as firebase from 'firebase/app';
import { User } from '../model/user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
  
  isLoggedIn = false;
  activeUser: User;
  redirectUrl: string;
  
  constructor(private auth: AngularFireAuth, private userService: UserService) {
  }
  
  signup(email: string, password: string) {
    this.auth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.isLoggedIn = true;
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });    
  }
  
  login(model: any): Observable<boolean> {
    this.auth
      .auth
      .signInWithEmailAndPassword(model.username, model.password)
      .then(value => {
        this.isLoggedIn = true;
        this.userService.getUserByLogin(value.email).then(user => this.activeUser = user);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
      return Observable.of(this.isLoggedIn);
  }
  
  loginWithGoogle() {
    
  }
  
  loginWithFacebook() {
    
  }
  
  loginWithGithub() {
    
  }
  
  loginWithTwitter() {
    
  }
  
  logout() {
    this.auth
      .auth
      .signOut();
  }
}