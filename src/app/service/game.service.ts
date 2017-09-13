import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { GAMES } from '../model/mock/mock-game';
import { Game } from '../model/game';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GameService {

constructor() { }

  getGames(): Game[]{
      return GAMES;
  }
}
