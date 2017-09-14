import { Component, OnInit } from '@angular/core';

import { Cart } from '../../model/cart';
import { Copy } from '../../model/copy';

import { CARTS } from '../../model/mock/mock-cart';

import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  private cart: Cart;
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCart().then(
      cart => {
        this.cart = cart;
        this.calculTotalAmount();
      }
    );
  }

  removeCopy(copy: Copy): void {
    this.cart.copies.splice(this.cart.copies.indexOf(copy), 1);
    this.calculTotalAmount();
  }

  emptCart(): void {
    this.cart.copies = [];
    this.calculTotalAmount();
  }

  calculTotalAmount(): void {
    this.totalPrice = this.cart.copies.reduce( (a, b) => (a + b.price), 0 );
  }
}
