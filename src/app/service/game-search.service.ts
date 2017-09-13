import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Game } from '../model/game';
import { GameService } from './game.service';
import { ActivatedRoute } from '@angular/router';
import { GAMES } from '../model/mock/mock-game';

@Injectable()
export class GameSearchService {

  constructor( private gameService: GameService, private route: ActivatedRoute) {}

  search(term: string): Observable<Game[]> {
    return Observable.of(GAMES.filter(x => x.name === term));
  }
}
