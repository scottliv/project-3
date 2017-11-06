import {
	SVG_NS,
	KEYS
} from '../settings';
import Board from './Board';
import Paddle from './Paddle';
import Ball from './Ball';
import Score from './Score';

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;

		this.gameElement = document.getElementById(element);
		this.boardGap = 10;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.radius = 8;

		this.board = new Board(this.width, this.height);

		this.score1 = new Score(200, 30, 30);
		this.score2 = new Score(285, 30, 30);

		this.ball = new Ball(this.radius, this.width, this.height);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			(this.height - this.paddleHeight) / 2,
			KEYS.a,
			KEYS.z,
			KEYS.s);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			(this.width - this.boardGap - this.paddleWidth),
			(this.height - this.paddleHeight) / 2,
			KEYS.up,
			KEYS.down,
			KEYS.left);

		document.addEventListener('keydown', event => {
			if (event.key === KEYS.spaceBar) {
				this.pause = !this.pause;
			} else if (event.key === KEYS.g) {
				this.player1.score = 0;
				this.player2.score = 0;
			}
		});
	}

	render() {
		if (this.player1.score < 11 && this.player2.score < 11) {
			if (this.pause) {
				return;
			}
			this.gameElement.innerHTML = '';

			let svg = document.createElementNS(SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
			svg.setAttributeNS(null, 'version', '1.1');

			this.gameElement.appendChild(svg);

			this.board.render(svg);

			this.score1.render(svg, this.player1.score);
			this.score2.render(svg, this.player2.score);

			this.player1.render(svg);
			this.player2.render(svg);

			this.ball.render(svg, this.player1, this.player2);

		} else {
			this.gameElement.innerHTML = '';

			let gameOver = document.createElement('h2')
			gameOver.setAttribute('class', 'game-over');

			gameOver.innerHTML = 'Game Over <br> Press G to start a new game';

			this.gameElement.appendChild(gameOver);

		}
	}

}