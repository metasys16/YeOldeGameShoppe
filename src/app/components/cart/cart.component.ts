import { Component, OnInit } from '@angular/core';

import { Cart } from '../../model/cart';
import { Copy } from '../../model/copy';

import { CARTS } from '../../model/mock/mock-cart';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  private cart: Cart;
  private copies: Copy[];
  totalPrice: number;

  ngOnInit(): void {
    this.cart = CARTS[0];
    this.copies = this.cart.copies;
    this.totalPrice = this.copies.reduce( (a,b) => (a + b.price), 0 );
  }
}
