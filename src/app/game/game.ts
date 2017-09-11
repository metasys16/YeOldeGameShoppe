import { Kind } from '../kind/kind';
import { Editor } from '../editor/editor';
import { Platform } from '../platform/platform';

export class Game {
  id: number;
  name: String;
  rate: number;
  editor: String[];
  genre: Kind[];
  platformList: Platform[];
  description: String;
  jacket: String;
  releaseDate: string;
  pegi: number;
}

