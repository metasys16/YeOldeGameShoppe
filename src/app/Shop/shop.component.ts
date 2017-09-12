//import { User } from '../user';
//import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game/game';
import { GameService } from './game.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private games: Game[];
//  private id: number;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

}
