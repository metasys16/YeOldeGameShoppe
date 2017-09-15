import { Genre } from '../genre';
import { Editor } from '../editor';
import { Platform } from '../platform';
import { Game } from '../game';

export const GAMES: Game[] = [

	{
		id: 1,
		name: 'Mario',
		creationDate: new Date(2017, 1, 12),
		editors: [{name: 'Nintendo'}],
		genres: [{name: 'plateforme'}],
		platforms: [{name: 'NES'}, {name: 'GameBoy'}, {name: 'Nintendo64'}],
		description: 'Super Mario est une sÃ©rie de jeux vidÃ©o de plates-formes crÃ©Ã©e par Nintendo et mettant en scÃ¨ne sa mascotte Mario ainsi que, dans beaucoup de jeux, son frÃ¨re Luigi. Il sagit de la premiÃ¨re sÃ©rie de la franchise Mario. Au moins un jeu Super Mario est sorti sur chaque console majeure de Nintendo depuis le premier Ã©pisode, Super Mario Bros., sorti en 1985 sur Nintendo Entertainment System.',
		releaseYear: '1987',
		cover:'../../../assets/images/jackets/Mario.jpg',
		miniCover:'../../../assets/images/jackets/Mario-min.jpg',
		pegi: 3,
		rates: [{
		  mark: 3,
		  
			comment: 'faut revoir le gamePlay les dev ont du coder ca bourrés !!!'
		},{
		  mark: 2,
			comment: 'faut revoir le gamePlay les dev ont du coder ca bourrés et saoul!!!'
		}],
		copies: [
			{
                seller:{
                    id: 1,
                    firstName: 'ABRAHAM',
                    lastName: 'Nathan',
                    mail: 'nathan.abraham@exemple.com',
                    userName: '',
                    password: '',
                    avatar: '../../assets/images/profils/profile-unknow.jpg',
    			}, 
                price:120
            },
			{
                seller:{
                    id: 2,
                    firstName: 'TANCHEREAU',
                    lastName: 'Victor',
                    mail: 'tancheareau.victor@exemple.com',
                    orders: [],
                    userName: '',
                    password: ''
                },
                price:110
            },
			{
                seller:{
                    id: 3,
                    firstName: 'PUSSAUT',
                    lastName: 'Pierre',
                    mail: 'pussaut.pierre@exemple.com',
                    orders: [],
                    userName: '',
                    password: ''
                },
                price:130
            }
		],
		commentary: [
			{
				editor:{
					id: 1,
                    firstName: 'ABRAHAM',
                    lastName: 'Nathan',
                    mail: 'nathan.abraham@exemple.com',
                    userName: '',
                    password: '',
                    avatar: '../../../assets/images/profils/profile-unknow.jpg',
				},
				comment: "Ce jeu est super bien",
				creationDate: new Date(2017, 2, 12),
			},
			{
				editor:{
					id: 3,
                    firstName: 'PUSSAUT',
                    lastName: 'Pierre',
                    mail: 'pussaut.pierre@exemple.com',
                    userName: '',
                    password: ''
				},
				comment: "Licorne",
				creationDate: new Date(2017, 11, 12),
			}
		]	
	},
	{
		id: 2,
		name: 'Tetris',
		creationDate: new Date(2017, 9, 12),
		editors: [{name: 'Divers'}],
		genres: [{name: 'puzzle'}],
		platforms: [{name: 'GameBoy'}],
		description: 'Tetris est un jeu vidÃ©o de puzzle conÃ§u par AlekseÃ¯ Pajitnov Ã  partir de juin 1984 sur Elektronika 60. Lors de la crÃ©ation du concept, Pajitnov est aidÃ© de Dmitri Pavlovski et Vadim Guerassimov pour le dÃ©veloppement. Le jeu est Ã©ditÃ© par plusieurs sociÃ©tÃ©s au cours du temps, Ã  la suite dune guerre pour lappropriation des droits Ã  la fin des annÃ©es 1980.',
		releaseYear: '1984',
		cover: '../../../assets/images/jackets/Tetris.jpg',
		miniCover: '../../../assets/images/jackets/Tetris-min.png',
		pegi: 3,
		rates: [{
		  mark: 5,
			comment: 'faut revoir le gamePlay les dev ont du coder ca bourrés !!!'
		},{
		  mark: 3,
			comment: 'faut revoir le gamePlay les dev ont du coder ca bourrés et saoul!!!'
		}],
	},
	{
		id: 3,
		name: 'Donkey Kong',
		creationDate: new Date(2017, 3, 12),
		editors: [{name: 'Nintendo'}],
		genres: [{name: 'aventure'}, {name: 'puzzle'}],
		platforms: [{name: 'GameBoy'}],
		description: 'Donkey Kong est un jeu vidÃ©o de plates-formes/puzzle sorti en 1994 sur Game Boy. Le jeu a Ã©tÃ© dÃ©veloppÃ© par Nintendo EAD et Ã©ditÃ© par Nintendo. Il est compatible avec les amÃ©liorations qu offre le Super Game Boy, accessoire permettant de jouer aux jeux Game Boy sur Super Nintendo. Il a inspirÃ© la sÃ©rie de jeux lancÃ©e par Mario vs. Donkey Kong sur Game Boy Advance.',
		releaseYear: '1994',
		cover: '../../../assets/images/jackets/DonKeyKong.jpg',
		miniCover: '../../../assets/images/jackets/DonKeyKong-min.jpg',
		pegi: 3
	},
	{
		id: 4,
		name: 'Sonic',
		creationDate: new Date(2017, 4, 12),
		editors: [{name: 'Sega'}],
		genres: [{name: 'plateforme'}],
		platforms: [{name: 'MegaDrive'}, {name: 'MasterSysteme'}, {name: 'GameBoy'}],
		description: 'Sonic the Hedgehog est un jeu vidÃ©o de plates-formes dÃ©veloppÃ© par la Sonic Team et Ã©ditÃ© par Sega sorti en 1991 sur Mega Drive, et converti sur Master System et Game Gear. Il s agit du tout premier jeu dans lequel figure Sonic, le hÃ©risson bleu Ã©ponyme, et mascotte de Sega, en tant que personnage jouable, le premier jeu dans lequel il est apparu Ã©tant Rad Mobile .',
		releaseYear: '1991',
		cover: '../../../assets/images/jackets/Sonic.jpg',
		miniCover: '../../../assets/images/jackets/Sonic-min.jpg',
		pegi: 3
	},
	{
		id: 5,
		name: 'Pokemon Rouge',
		creationDate: new Date(2017, 5, 12),
		editors: [{name: 'Game Freak'}],
		genres: [{name: 'aventure'}],
		platforms: [{name: 'GameBoy'}],
		cover: '../../../assets/images/jackets/PokemonRouge.jpg',
		miniCover: '../../../assets/images/jackets/PokemonRouge-min.jpg',
		description: 'Le joueur contrÃ´le le personnage principal via une vue aÃ©rienne et le dirige dans l ensemble de la rÃ©gion fictive de Kanto, inspirÃ©e de la rÃ©gion de KantÅ� sur l Ã®le de HonshÅ«, au Japon. Son but est de capturer, d entraÃ®ner et de faire combattre des crÃ©atures fictives appelÃ©es Â« PokÃ©mon Â» afin d obtenir le titre de Â« MaÃ®tre PokÃ©mon Â». L objectif ultime est de complÃ©ter le PokÃ©dex par l obtention des 150 PokÃ©mon disponibles . Nintendo a par la suite annoncÃ© l existence d un 151e PokÃ©mon secret, Mew. Les versions rouge et bleue sont quasiment identiques : la seule diffÃ©rence rÃ©side dans la prÃ©sence ou l absence de certains PokÃ©mon, de sorte qu il est nÃ©cessaire pour un joueur cherchant Ã  tous les obtenir de rÃ©aliser des Ã©changes avec l autre version du jeu via un cÃ¢ble link, qui permet Ã©galement d organiser des combats entre joueurs.',
		releaseYear: '1996',
		pegi: 3
	},
	{
		id: 6,
		name: 'Mario Kart',
		creationDate: new Date(2017, 9, 12),
		editors: [{name: 'Nintendo'}],
		genres: [{name: 'plateforme'}],
		platforms: [{name: 'NES'}, {name: 'GameBoy'}, {name: 'Nintendo64'}],
		description: 'Super Mario est une sÃ©rie de jeux vidÃ©o de plates-formes crÃ©Ã©e par Nintendo et mettant en scÃ¨ne sa mascotte Mario ainsi que, dans beaucoup de jeux, son frÃ¨re Luigi. Il sagit de la premiÃ¨re sÃ©rie de la franchise Mario. Au moins un jeu Super Mario est sorti sur chaque console majeure de Nintendo depuis le premier Ã©pisode, Super Mario Bros., sorti en 1985 sur Nintendo Entertainment System.',
		releaseYear: '1990',
		cover:'../../../assets/images/jackets/MarioKart.jpg',
		miniCover:'../../../assets/images/jackets/MarioKart-min.jpg',
		pegi: 3,
	}
];
