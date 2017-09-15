import { User } from '../../model/user';
import { ArrayKeyPipe } from '../../pipe/array-key.pipe';
import { OrderService } from '../../service/order.service';
import { UserService } from '../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  user: User;
  userOrder: any;

  constructor(private userService: UserService, private route: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUser(params.get('username')))
      .subscribe(user => {
        this.user = user;
        this.userOrder = this.orderService.getOrdersOfUser(user.orders);
      });
  }
  
  debug(){
    console.log(this.userOrder);
  }
  
}
