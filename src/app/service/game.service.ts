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

  getLatestGames(): Game[] {
    let games = GAMES.slice();
    console.log(games);
    games = games.sort((a, b) => (a.creationDate > b.creationDate)?-1:1);
    console.log(games);
    return games.slice(0, 3);
  }

  getHighestRatedGames(): Game[] {
    let games = GAMES.slice();
    games = games.sort((a, b) => (this.averageRate(a)>this.averageRate(b))?-1:1);
    return games.slice(0, 3);
  }

  getBestSellers(): Game[] {
    let games = GAMES.slice();
    return games.reverse().slice(0, 3);
  }

  getMySelection(): Game[] {
    let games = GAMES.slice();
    return games.slice(0, 3);
  }

  private averageRate(game: Game): number {
    if (!game.rates || game.rates.length === 0) {
      return 0;
    }
    return game.rates.reduce((a, b) => (a + b.mark), 0)/game.rates.length;
  }
}

export class Criteria {
  genres?: Genre[];
  platforms?: Platform[];
}
