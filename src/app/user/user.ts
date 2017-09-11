import { Kind } from '../kind/kind';
import { Order } from '../order/order';
import { Address } from './address';

export class User {
  id: number;
  firstName: String;
  lastName: String;
  mail: String;
  delivryAddress: Address;
  billingAddress: Address;
  orderList: Order[];
  login: String;
  password: String;
  favoriteKind: Kind;
}