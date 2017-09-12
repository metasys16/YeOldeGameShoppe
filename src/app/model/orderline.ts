import { Game } from './game';
import { Order } from './order';

export class OrderLine {

  private _game: Game;
  get game(): Game {
    return this._game;
  }
  set game(theGame : Game) {
    this._game = theGame;
  }

  private _order: Order;
  get order(): Order {
    return this._order;
  }
  set order(theOrder : Order) {
    this._order = theOrder;
  }

}
