import { Game } from './game';
import { User } from './user';

export class Comment {
	game?: Game;
	editor: User;
	comment: string;
}