import { Kind } from '../kind/kind';
import { Editor } from '../editor/editor';
import { Platform } from '../platform/platform';
import { GAMES } from './mock-game';


export class Game {
  id: number;
  name: String;
  raite: number;
  addDate: Date;
  price: number;
  editor: String;
  kindList: Kind[];
  platformList: Platform[];
  quantity: number;
  description: String;
  jacket: String;
  releaseDate: string;
  pegi: number;
}

