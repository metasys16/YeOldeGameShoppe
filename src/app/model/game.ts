import { Genre } from './genre';
import { Editor } from './editor';
import { Platform } from './platform';
import { Rate } from './rate';
import { Copy } from './copy';

export class Game {
  id: number;
  name: String;
  rates?: Rate[];
  creationDate: Date;
  editors: Editor[];
  genres: Genre[];
  platforms: Platform[];
  description?: String;
  cover?: String;
  miniCover?: String;
  releaseYear: String;
  pegi?: number;
  copies?: Copy[];

  public getRate(): number {
    if (!this.rates || this.rates.length === 0) {
      return 0;
    }
    return this.rates.reduce((a, b) => (a + b.mark), 0)/this.rates.length;
  }



}
