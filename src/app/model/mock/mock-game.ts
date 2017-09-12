import { Genre } from '../genre';
import { Editor } from '../editor';
import { Platform } from '../platform';
import { Game } from '../game';

export const GAMES: Game[]= [
	{ id:1 , name:'Mario' , rate:5 ,   editors:['Nintendo'] , genres:[{name: 'plate-forme'}] ,
		platforms:[{name:'NES'}, {name:'GameBoy'}, {name:'Nintendo64'}] ,
		description:'Super Mario est une série de jeux vidéo de plates-formes créée par Nintendo et mettant en scène sa mascotte Mario ainsi que, dans beaucoup de jeux, son frère Luigi. Il sagit de la première série de la franchise Mario. Au moins un jeu Super Mario est sorti sur chaque console majeure de Nintendo depuis le premier épisode, Super Mario Bros., sorti en 1985 sur Nintendo Entertainment System.' ,
		jacket:'' , releaseDate:'1987' , pegi:3 },
	{ id:2 , name:'Tetris' , rate:4 ,  editors:['Divers'] , genres:[{name: 'puzzle'}] , platforms:[{name:'GameBoy'}] ,
		description:'Tetris est un jeu vidéo de puzzle conçu par Alekseï Pajitnov à partir de juin 1984 sur Elektronika 60. Lors de la création du concept, Pajitnov est aidé de Dmitri Pavlovski et Vadim Guerassimov pour le développement. Le jeu est édité par plusieurs sociétés au cours du temps, à la suite dune guerre pour lappropriation des droits à la fin des années 1980.' ,
		jacket:'' , releaseDate:'1984' , pegi:3 },
	{ id:3 , name:'Donkey Kong' , rate:4 ,   editors:['Nintendo'] , genres:[{name:'plate-forme'}, {name: 'puzzle'}],
		platforms:[{name:'GameBoy'}] ,  description:'Donkey Kong est un jeu vidéo de plates-formes/puzzle sorti en 1994 sur Game Boy. Le jeu a été développé par Nintendo EAD et édité par Nintendo. Il est compatible avec les améliorations qu offre le Super Game Boy, accessoire permettant de jouer aux jeux Game Boy sur Super Nintendo. Il a inspiré la série de jeux lancée par Mario vs. Donkey Kong sur Game Boy Advance.' ,
		jacket:'' , releaseDate:'1994' , pegi:3 },
	{ id:4 , name:'Sonic' , rate:3 ,   editors:['Sega'] , genres:[{name: 'plate-forme'}] , platforms:[{name:'Mega Drive'}, {name:'Master Systeme'}] ,
		description:'Sonic the Hedgehog est un jeu vidéo de plates-formes développé par la Sonic Team et édité par Sega sorti en 1991 sur Mega Drive, et converti sur Master System et Game Gear. Il s agit du tout premier jeu dans lequel figure Sonic, le hérisson bleu éponyme, et mascotte de Sega, en tant que personnage jouable, le premier jeu dans lequel il est apparu étant Rad Mobile .' ,
		jacket:'' , releaseDate:'1991' , pegi:3 },
	{ id:5 , name:'Pokemon Rouge' , rate:4.5 ,   editors:['Game Freak'] , genres:[{name: 'aventure'}] , platforms:[{name:'Game Boy'}] ,
		description:'Le joueur contrôle le personnage principal via une vue aérienne et le dirige dans l ensemble de la région fictive de Kanto, inspirée de la région de Kantō sur l île de Honshū, au Japon. Son but est de capturer, d entraîner et de faire combattre des créatures fictives appelées « Pokémon » afin d obtenir le titre de « Maître Pokémon ». L objectif ultime est de compléter le Pokédex par l obtention des 150 Pokémon disponibles . Nintendo a par la suite annoncé l existence d un 151e Pokémon secret, Mew. Les versions rouge et bleue sont quasiment identiques : la seule différence réside dans la présence ou l absence de certains Pokémon, de sorte qu il est nécessaire pour un joueur cherchant à tous les obtenir de réaliser des échanges avec l autre version du jeu via un câble link, qui permet également d organiser des combats entre joueurs.' ,
		jacket:'' , releaseDate:'1996' , pegi:3 }
];
