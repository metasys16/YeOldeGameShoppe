import { Cart } from '../model/cart';
import { Copy } from '../model/copy';
import { CARTS } from '../model/mock/mock-cart';
import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  constructor() { }

  getCart(): Promise<Cart> {
    return Promise.resolve(CARTS[0]);
  }
}
