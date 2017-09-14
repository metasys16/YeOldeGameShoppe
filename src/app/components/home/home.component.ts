import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { GAMES } from '../../model/mock/mock-game';

import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  latestGames: Game[] = GAMES;
  highestRated: Game[] = GAMES;
  bestSellers: Game[] = GAMES;
  mySelection: Game[] = GAMES;

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.latestGames = this.gameService.getLatestGames();
    this.highestRated = this.gameService.getHighestRatedGames();
    this.bestSellers = this.gameService.getBestSellers();
		this.mySelection = this.gameService.getMySelection();
	}
}
