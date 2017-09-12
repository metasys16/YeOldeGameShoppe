import { Game } from './game';
import { GAMES } from './mock-game';
import { Injectable } from '@angular/core';

@Injectable()
export class GameDetailService {
	constructor() {}
		getGame(id: number): Game {
			return GAMES.find(elem => elem.id == id);
		}
}