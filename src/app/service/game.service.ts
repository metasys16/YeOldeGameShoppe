import { Game } from '../model/game';
import { GAMES } from '../model/mock/mock-game';
import { Injectable } from '@angular/core';
import { Genre } from '../model/genre';
import { Platform } from '../model/platform';
import { Editor } from '../model/editor';

import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/map';

@Injectable()
export class GameService {

  games: FirebaseListObservable<any>;

  constructor(private dataBase: AngularFireDatabase) {
    this.games = this.dataBase.list('/games');
  }

  getGame(id: number): Game {
    return GAMES.find(elem => elem.id == id);
  }

  getGames(criteria?: Criteria): FirebaseListObservable<any> {
    return this.games;
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
    //games = games.sort((a, b) => a.getRate() > b.getRate()?-1:1);
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

  public averageRate(game: Game): number {
    if (!game.rates || game.rates.length === 0) {
      return 0;
    }
    return game.rates.reduce((a, b) => (a + b.mark), 0)/game.rates.length;
  }
}

export class Criteria {
  genres?: Genre[];
  platforms?: Platform[];
  editors?: Editor[];
}
