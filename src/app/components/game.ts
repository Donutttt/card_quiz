import { Board } from './board';

const DEFAULT_LIVES = 3;
const STARTING_POINTS = 0;

export class Game {
    board: Board;
    lives: number = DEFAULT_LIVES;
    points: number = STARTING_POINTS;
    bg_image: string;
}
