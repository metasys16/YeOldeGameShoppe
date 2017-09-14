import { Genre } from './genre';
import { Order } from './order';
import { Address } from './address';

export class User {
  id: number;
  firstName: String;
  lastName: String;
  mail: String;
  deliveryAddress?: Address;
  billingAddress?: Address;
  orders?: Order[];
  userName: String;
  password: String;
  favoriteGenre?: Genre;
  following?: User[];
  avatar?: String;
}
