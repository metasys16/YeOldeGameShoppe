import { Component, OnInit } from '@angular/core';

import { Order } from '../../model/order';
import { User } from '../../model/user';
import { Cart } from '../../model/cart';
import { Delivery } from '../../model/delivery';

import { USERS } from '../../model/mock/mock-user';

import { CartService } from '../../service/cart.service';
import { DeliveryService } from '../../service/delivery.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
  private order: Order;
  private user: User;
  private cart: Cart;
  private deliveries: Delivery[];
  private totalPrice: number;
  private selectedDelivery: Delivery;

  constructor(private cartService: CartService,
              private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.user = USERS[0];
    this.order = this.user.orders[0];

    this.cartService.getCart().then(
      cart => {
        this.cart = cart;
        this.calculTotalAmount();
      }
    );

    this.deliveryService.getDeliveries().then( deliveries => this.deliveries = deliveries );

    if (this.user.billingAddress == undefined){
      this.order.billingAddress = { addressNumber:"", street: "", complement:"Complément d'adresse", city: "Ville", postalCode: "Code Postal", country: "Pays"};
    }else{
      this.order.billingAddress = this.user.billingAddress;
    }
    if (this.user.deliveryAddress == undefined){
      this.order.deliveryAddress = { addressNumber:"", street: "", complement:"Complément d'adresse", city: "Ville", postalCode: "Code Postal", country: "Pays"};
    }else{
      this.order.deliveryAddress = this.user.deliveryAddress;
    }
  }

  updateSelectedValue(event:string): void{
    this.selectedDelivery = JSON.parse(event);
  }

  calculTotalAmount(): void {
    this.totalPrice = this.cart.copies.reduce( (a,b) => (a + b.price), 0 );
  }
}
