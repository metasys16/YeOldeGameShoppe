import { Component, OnInit } from '@angular/core';

import { Order } from '../../model/order';
import { User } from '../../model/user';
import { Cart } from '../../model/cart';
import { Delivery } from '../../model/delivery';
import { Address } from '../../model/address';

import { USERS } from '../../model/mock/mock-user';

import { CartService } from '../../service/cart.service';
import { DeliveryService } from '../../service/delivery.service';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
  order: Order;
  user: User;
  cart: Cart;
  deliveries: Delivery[];
  totalPrice: number;
  selectedDelivery: Delivery;
  editBillingAddress: Boolean;
  editDeliveryAddress: Boolean;
  tempBillingAddress: Address;
  tempDeliveryAddress: Address;

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
      this.order.billingAddress = { addressNumber:"", street: "", complement:"", city: "", postalCode: "", country: ""};
      this.tempBillingAddress = { addressNumber:"", street: "", complement:"", city: "", postalCode: "", country: ""};
      this.editBillingAddress = true;
    }else{
      this.order.billingAddress = this.user.billingAddress;
      this.editBillingAddress = false;
    }
    if (this.user.deliveryAddress == undefined){
      this.order.deliveryAddress = { addressNumber:"", street: "", complement:"", city: "", postalCode: "", country: ""};
      this.tempDeliveryAddress = { addressNumber:"", street: "", complement:"", city: "", postalCode: "", country: ""};
      this.editDeliveryAddress = true;
    }else{
      this.order.deliveryAddress = this.user.deliveryAddress;
      this.editDeliveryAddress = false;
    }
  }

  updateSelectedValue(event:string): void{
    this.selectedDelivery = JSON.parse(event);
  }

  calculTotalAmount(): void {
    this.totalPrice = this.cart.copies.reduce( (a,b) => (a + b.price), 0 );
  }

  saveBillingAddress(): void{
    this.editBillingAddress = false;
    this.order.billingAddress = this.cloneAddress(this.order.billingAddress, this.tempBillingAddress);
  }

  editBillingAddressClick(): void{
    this.editBillingAddress = true;
    this.tempBillingAddress = this.cloneAddress(this.tempBillingAddress, this.order.billingAddress);
  }

  cancelEditBillingAddress(): void{
    this.editBillingAddress = false;
  }

  saveDeliveryAddress(): void{
    this.editDeliveryAddress = false;
    this.order.deliveryAddress = this.cloneAddress(this.order.deliveryAddress, this.tempDeliveryAddress);
  }

  editDeliveryAddressClick(): void{
    this.editDeliveryAddress = true;
    this.tempDeliveryAddress = this.cloneAddress(this.tempDeliveryAddress, this.order.deliveryAddress);
  }

  cancelDeliveryAddress(): void{
    this.editDeliveryAddress = false;
  }

  private cloneAddress(target: Address, source: Address): Address{
    target.addressNumber = source.addressNumber;
    target.street = source.street;
    target.complement = source.complement;
    target.city = source.city;
    target.postalCode = source.postalCode;
    target.country = source.country;

    return target;
  }
}
