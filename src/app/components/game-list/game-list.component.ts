import { Component, Input, OnChanges } from '@angular/core';
import { Game } from '../../model/game';

@Component({
  selector: 'app-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.css']
})

export class GameListComponent {
  @Input() games: Game[];

}
