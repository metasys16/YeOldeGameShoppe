import { Cart } from '../cart';

export const CARTS: Cart[] = [
  {
    copies: [
      {
        game: {
          id: 1,
      		name: 'Mario',
      		creationDate: new Date(2017,9,12),
      		editors: [{name: 'Nintendo'}],
      		genres: [{name: 'plate-forme'}],
      		platforms: [{name: 'NES'}, {name: 'GameBoy'}, {name: 'Nintendo64'}],
      		description: 'Super Mario est une sÃ©rie de jeux vidÃ©o de plates-formes crÃ©Ã©e par Nintendo et mettant en scÃ¨ne sa mascotte Mario ainsi que, dans beaucoup de jeux, son frÃ¨re Luigi. Il sagit de la premiÃ¨re sÃ©rie de la franchise Mario. Au moins un jeu Super Mario est sorti sur chaque console majeure de Nintendo depuis le premier Ã©pisode, Super Mario Bros., sorti en 1985 sur Nintendo Entertainment System.',
      		releaseYear: '1987',
      		pegi: 3
        },
        seller: {
          id: 2,
          firstName: 'TANCHEREAU',
          lastName: 'Victor',
          mail: 'tancheareau.victor@exemple.com',
          orders: [],
          userName: '',
          password: ''
        },
        price: 1
      }
    ]
  }
]
