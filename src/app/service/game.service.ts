import { Game } from '../model/game';
import { GAMES } from '../model/mock/mock-game';
import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  constructor() { }
  getGame(id: number): Game {
    return GAMES.find(elem => elem.id == id);
  }
  getGames(): Game[] {
    return GAMES;
  }
}
