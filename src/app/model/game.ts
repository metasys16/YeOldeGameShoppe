import { Genre } from './genre';
import { Editor } from './editor';
import { Platform } from './platform';
import { Rate } from './rate';

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
  releaseYear: String;
  pegi?: number;
  jacket?: String;
}
