import { Address } from '../user/address';
import { User } from '../user/user';
import { Delivry } from './delivry';
import { OrderLine } from './orderline';

export class Order {
  reference: String;
  user: User;
  orderDate: Date;
  totalAmount: number;
  orderLineList: OrderLine[];
  delivryAddress: Address;
  billingAddress: Address;
  delivry: Delivry;
  paymentMethod: String;
}