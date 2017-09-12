import { User } from './user';
import { Game } from './game';

export class ChatMessage {
  game: Game;
  user: User;
  message: String;
  sendingDate: Date;
}
