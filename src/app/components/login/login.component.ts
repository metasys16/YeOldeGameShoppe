import { AuthService } from '../../service/auth.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  
  message: string;
  
  model: any = {};
  
  constructor(public authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.model);
    let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/my-profile';
    this.router.navigate([redirect]);
  }

  logout() {
    this.authService.logout();
  }
}