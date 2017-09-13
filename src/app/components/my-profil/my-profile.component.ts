import { User } from '../../model/user';
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

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUser(+params.get('id'))).subscribe(user => this.user = user);
  }

}
