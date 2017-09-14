// import { User } from '../user';
// import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../../model/game';
import { Platform } from '../../model/platform';
import { GameService, Criteria } from '../../service/game.service';
import { Genre } from '../../model/genre';
import { Editor } from '../../model/editor';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  private games: Game[];
  private filterCriteria: Criteria = {genres: [], platforms: [], editors: []};

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("initialisation du shoppe");
    this.gameService.getGames().then(games => {console.log("nan mais allo quoi");this.games = games;console.log("vla des jeux, ",this.games)}).catch(x => console.log("suuce"));
  }

  filter(criteria: string, value: any, criteriaType: string): void {
    if (criteriaType === 'Genre') {
      if (value) {
        let genre: Genre = { name: criteria };
        this.filterCriteria.genres.push(genre);
      } else {
        let index = this.filterCriteria.genres.findIndex(a => a.name === criteria);
        if (-1 !== index) {
          this.filterCriteria.genres.splice(index, 1);
        }
      }
    }

    if (criteriaType === 'Editor'){
      if (value) {
        let editor: Editor = { name: criteria };
        this.filterCriteria.editors.push(editor);
        console.log('coucou');
      }
      else {
        let index = this.filterCriteria.editors.findIndex(a => a.name === criteria);
        if (-1 !== index) {
          this.filterCriteria.editors.splice(index, 1);
        }
      }
    }

    if (criteriaType == 'Platform'){
      if (value) {
        let platform: Platform = { name: criteria };
        this.filterCriteria.platforms.push(platform);
      }
      else {
        let index = this.filterCriteria.platforms.findIndex(a => a.name === criteria);
        if (-1 !== index) {
          this.filterCriteria.platforms.splice(index, 1);
        }
      }
    }
//
//    this.games = this.gameService.getGames(this.filterCriteria);
    console.log(this.filterCriteria);
  }

}
