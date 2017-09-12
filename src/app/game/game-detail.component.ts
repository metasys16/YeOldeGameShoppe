import { Game } from '../model/game';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameDetailService } from './game-detail.service';


@Component({
	selector: 'game-detail',
	templateUrl: './game-detail.component.html',
	styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent implements OnInit {
	
	private game:Game;
	private id: number;

	constructor(private gameDetailService: GameDetailService, private route: ActivatedRoute) {}

	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.game = this.gameDetailService.getGame(this.id);
	}
}