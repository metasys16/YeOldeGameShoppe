import { Game } from '../../model/game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailService } from '../../service/game-detail.service';


@Component({
	selector: 'game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {

	private game:Game;
	private id: number;
	private hasCopies: boolean;

	constructor(private gameDetailService: GameDetailService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.game = this.gameDetailService.getGame(this.id);
		this.hasCopies = this.game.copies !== undefined 
					  && this.game.copies !== null
					  && this.game.copies.length > 0;
	}

	/*addcart(): void {
		while (Game.id !== []){

		}
		else{

		}
	}*/
}
