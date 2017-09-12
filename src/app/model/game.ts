import { Genre } from './genre';
import { Editor } from './editor';
import { Platform } from './platform';

export class Game {
  id: number;
  name: String;
  rate: number;
  editors: String[];
  genres: Genre[];
  platforms: Platform[];
  description: String;
  jacket: String;
  releaseDate: String;
  pegi: number;
}
