import 'Kind' from '../kind/kind';
import 'Editor' from '../editor/editor';
import 'Platform' from '../platform/platform';

export class Game {
  name: String;
  raite: number;
  addDate: Date;
  price: number;
  editor: Editor;
  kindList: Kind[];
  platformList: Platform[];
  quantity: number;
  description: String;
  image: String;
  releaseDate: Date;
  pegi: number;
}
