import 'Kind' from '../kind/kind';
import 'Editor' from '../editor/editor';
import 'Platform' from '../platform/platform';

export class Game {
  id: number;
  name: String;
  raite: number;
  addDate: Date;
  price: number;
  editor: Editor;
  kindList: Kind[];
  platformList: Platform[];
  quantity: number;
  description: String;
  jacket: String;
  releaseDate: Date;
  pegi: number;
}
