import { Game } from '../model/game';
import { GAMES } from '../model/mock/mock-game';
import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';
import { Editor } from '../model/editor';

@Injectable()
export class GameService {
  constructor() { }
  getGame(id: number): Game {
    return GAMES.find(elem => elem.id == id);
  }
  getGames(criteria?: Criteria): Game[] {
    let games = GAMES;
    if (criteria) {
      if (criteria.genres.length) {
        criteria.genres.forEach(
          c_g => games = games.filter(j => j.genres.find(c_j => c_j.name === c_g.name))
        )
      }
      if (criteria.platforms.length) {
        criteria.platforms.forEach(
          c_p => games = games.filter(j => j.platforms.find(c_j => c_j.name === c_p.name))
        )
      }
      if (criteria.editors.length) {
        criteria.editors.forEach(
          c_p => games = games.filter(j => j.editors.find(c_j => c_j.name === c_p.name))
        )
      }
    }
    return games;
  }
}

export class Criteria {
  genres?: Genre[];
  platforms?: Platform[];
  editors?: Editor[];
}
