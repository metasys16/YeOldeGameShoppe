import { Game } from './game';
import { User } from './user';

export class Rate {
  user: User;
  game: Game;
  mark: number;
  comment?: String;
}
