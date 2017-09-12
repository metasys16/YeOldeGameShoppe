import { Game } from './game';
import { Order } from './order';

export class OrderLine {
  game: Game;
  order: Order;
  amount: number;
}
