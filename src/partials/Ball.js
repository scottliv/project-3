import {SVG_NS} from '../settings';

export default class Ball {

  constructor(radius, boardWith, boardHeight, x, y) {
    this.radius = radius;
    this.boardWidth = boardWith;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = y;

    this.direction = 1;
  }

  reset() {
    this.x = this.boardWith / 2;
    this.y = this.boardwith / 2;
  }

  render(svg) {
    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'fill', '#ffffff');
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);

    svg.appendChild(ball);
  }

}