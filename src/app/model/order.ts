import { Address } from './address';
import { User } from './user';
import { Delivery } from './delivery';
import { OrderLine } from './orderline';
import { Payment } from './payment';

export class Order {
  reference: String;
  user: User;
  creationDate: Date;
  totalAmount: number;
  orderLines: OrderLine[];
  deliveryAddress?: Address;
  billingAddress?: Address;
  delivery?: Delivery;
  paymentMethod?: Payment;
}
