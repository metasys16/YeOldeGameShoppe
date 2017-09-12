import { Genre } from './genre';
import { Order } from './order';
import { Address } from './address';

export class User {
  id: number;
  firstName: String;
  lastName: String;
  mail: String;
  delivryAddress: Address;
  billingAddress: Address;
  orders: Order[];
  login: String;
  password: String;
  favoriteKind: Genre;
}
