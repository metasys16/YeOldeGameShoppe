import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../../model/game';

/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'filterShop'})
export class FilterShopPipe implements PipeTransform {
  transform(allGames: Game[]){
    return allGames.filter(game => game.genres);
  }
}
