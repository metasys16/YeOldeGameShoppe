import { Component, OnInit } from '@angular/core';
import { Game } from '../../model/game';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.css']
})


export class GameListComponent implements OnInit{
  games: Game[] = [];

  constructor(private gameService: GameService){

  }
  ngOnInit(){
    this.games = this.gameService.getGames();
  }
}
