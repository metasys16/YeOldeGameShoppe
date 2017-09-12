import { Genre } from '../genre/genre';
import { Editor } from '../editor/editor';
import { Platform } from '../platform/platform';

export class Game {
  name: String;
  rate: number;
  addDate: Date;
  price: number;
  editor: Editor;
  genreList: Genre[];
  platformList: Platform[];
  quantity: number;
  description: String;
  image: String;
  releaseDate: Date;
  pegi: number;
}
