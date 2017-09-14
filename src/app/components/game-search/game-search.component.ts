import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Game } from '../../model/game';
import { GameSearchService } from '../../service/game-search.service';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['game-search.component.css'],
  providers: [GameSearchService]
})
export class GameSearchComponent implements OnInit {
  games: Observable<Game[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private gameSearchService: GameSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    term = term.toLowerCase();
    this.searchTerms.next(term);
    //console.log(term);
  }
  ngOnInit(): void {
    this.games = this.searchTerms
    //.debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.gameSearchService.search(term)
        : Observable.of<Game[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Game[]>([]);
      });
    }
  }
