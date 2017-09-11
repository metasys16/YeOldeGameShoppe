import 'Kind' from '../kind/kind';
import { Address } from './address';

export class User {
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