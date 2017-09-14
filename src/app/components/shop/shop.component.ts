//import { User } from '../user';
//import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../model/game';
import { Platform } from '../../model/platform';
import { GameService, Criteria } from '../../service/game.service';
import { Genre } from '../../model/genre';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private games: Game[];
  private filterCriteria: Criteria = {genres: [], platforms: []};

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
    //console.log(this.games);
  }

  filterGenre(criteria: string, value: any): void {
    if (value) {
      let genre: Genre = { name: criteria };
      this.filterCriteria.genres.push(genre);
    } else {
      let index = this.filterCriteria.genres.findIndex(a => a.name === criteria);
      if (-1 !== index) {
        this.filterCriteria.genres.splice(index, 1);
      }

    }
    this.games = this.gameService.getGames(this.filterCriteria);
    console.log(this.filterCriteria);
  }

  filterPlatform(criteria: string, value: any): void {
    if (value) {
      let platform: Platform = { name: criteria };
      this.filterCriteria.platforms.push(platform);
    } else {
      let index = this.filterCriteria.platforms.findIndex(a => a.name === criteria);
      if (-1 !== index) {
        this.filterCriteria.platforms.splice(index, 1);
      }

    }
    this.games = this.gameService.getGames(this.filterCriteria);
    console.log(this.filterCriteria);
  }
}
