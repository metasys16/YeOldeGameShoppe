import { Component, OnInit } from '@angular/core';

import { Cart } from '../../model/cart';
import { CARTS } from '../../model/mock/mock-cart';

import { Copy } from '../../model/copy';
import { COPIES } from '../../model/mock/mock-copy';

import { Game } from '../../model/game';
import { GAMES } from '../../model/mock/mock-game';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{
  private copies: Copy[];
  private carts: Cart[];
  private games: Game[];

  ngOnInit(): void {
        this.games = GAMES;
    }
}
