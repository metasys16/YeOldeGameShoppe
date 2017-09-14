import { Game } from '../model/game';
import { GAMES } from '../model/mock/mock-game';
import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';

@Injectable()
export class GameService {
  constructor() { }
  getGame(id: number): Game {
    return GAMES.find(elem => elem.id == id);
  }
  getGames(criteria?: Criteria): Game[] {
    let games = GAMES;
    if (criteria) {
      console.log("Coucou, tu vois voir mon critere ?");
      console.log(criteria.genres);
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
    }
    return games;
  }
}

export class Criteria {
  genres?: Genre[];
  platforms?: Platform[];
}
