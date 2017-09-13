import { Component, OnInit } from '@angular/core';

import { Order } from '../../model/order';
import { Cart } from '../../model/cart';

import { ORDERS } from '../../model/mock/mock-order';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit{
  private order: Order;

  ngOnInit(): void {
    this.order = ORDERS[0];
  }
}
