import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';
import { UserService } from '../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  private user: User;

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.authService.activeUser;
  }

}
