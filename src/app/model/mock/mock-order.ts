import { Order } from '../order';

export const ORDERS: Order[] = [
  {
    reference: '02-2017-HJ45',
    creationDate: new Date(2017, 9, 12),
    totalAmount: 99.98,
    orderLines: [
      {
        game: {
          id: 4,
          name: 'Sonic',
          creationDate: new Date(2017, 9, 12),
          editors: [{name: 'Sega'}],
          genres: [{name: 'plate-forme'}],
          platforms: [{name: 'Mega Drive'}, {name: 'Master Systeme'}],
          description: 'Sonic the Hedgehog est un jeu vidÃ©o de plates-formes dÃ©veloppÃ© par la Sonic Team et Ã©ditÃ© par Sega sorti en 1991 sur Mega Drive, et converti sur Master System et Game Gear. Il s agit du tout premier jeu dans lequel figure Sonic, le hÃ©risson bleu Ã©ponyme, et mascotte de Sega, en tant que personnage jouable, le premier jeu dans lequel il est apparu Ã©tant Rad Mobile .',
          releaseYear: '1991',
          miniCover: '../../../assets/images/jackets/Sonic.jpg',
          cover: '../../../assets/images/jackets/Sonic.jpg',
          pegi: 3
        },
        amount: 49.9
      },
      {
        game: {
          id: 5,
          name: 'Pokemon Rouge',
          creationDate: new Date(2017, 9, 12),
          editors: [{name: 'Game Freak'}],
          genres: [{name: 'aventure'}],
          platforms: [{name: 'Game Boy'}],
          miniCover: '../../../assets/images/jackets/PokemonRouge.jpg',
          cover: '../../../assets/images/jackets/PokemonRouge.jpg',
          description: 'Le joueur contrÃ´le le personnage principal via une vue aÃ©rienne et le dirige dans l ensemble de la rÃ©gion fictive de Kanto, inspirÃ©e de la rÃ©gion de KantÅ� sur l Ã®le de HonshÅ«, au Japon. Son but est de capturer, d entraÃ®ner et de faire combattre des crÃ©atures fictives appelÃ©es Â« PokÃ©mon Â» afin d obtenir le titre de Â« MaÃ®tre PokÃ©mon Â». L objectif ultime est de complÃ©ter le PokÃ©dex par l obtention des 150 PokÃ©mon disponibles . Nintendo a par la suite annoncÃ© l existence d un 151e PokÃ©mon secret, Mew. Les versions rouge et bleue sont quasiment identiques : la seule diffÃ©rence rÃ©side dans la prÃ©sence ou l absence de certains PokÃ©mon, de sorte qu il est nÃ©cessaire pour un joueur cherchant Ã  tous les obtenir de rÃ©aliser des Ã©changes avec l autre version du jeu via un cÃ¢ble link, qui permet Ã©galement d organiser des combats entre joueurs.',
          releaseYear: '1996',
          pegi: 3
        },
        amount: 49.9
      }
    ]
  }
];
