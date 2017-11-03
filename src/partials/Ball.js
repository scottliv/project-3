import {SVG_NS} from '../settings';


export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    
    this.reset();
  }

  reset() {
    //starting coordinates
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    //set movement vector
    this.vy = 0;
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }  
    
    this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  wallCollision() {
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    if(hitLeft || hitRight){
      this.vx = -this.vx;
    } else if (hitTop || hitBottom){
      this.vy = -this.vy;
    }
  }

  paddleCollision(player1, player2) {
    if (this.vx > 0) {
      // detect collision on right side (player 2)
      let paddle = player2.coordinates(player2.x, player2.y, player2.width, player2.height);
      let [leftX, rightX, topY, bottomY] = paddle;

      if(
        this.x + this.radius >= leftX 
        && this.y >= topY
        && this.y <= bottomY
      ){
        this.vx = -this.vx;
      }
    } else {
      // detect collision on left side (player 1)
      let paddle = player1.coordinates(player1.x, player1.y, player1.width, player1.height);
      let [leftX, rightX, topY, bottomY] = paddle;
 
      if(
        this.x - this.radius <= rightX 
        && this.y >= topY 
        && this.y <= bottomY
      ){
        this.vx = -this.vx
      }
    }
  }

  render(svg, player1, player2) {
    this.y += this.vy;
    this.x += this.vx; 

    this.paddleCollision(player1, player2);
    this.wallCollision();
    
    

    let ball = document.createElementNS(SVG_NS, 'circle');
    ball.setAttributeNS(null, 'r', this.radius);
    ball.setAttributeNS(null, 'fill', '#ffffff');
    ball.setAttributeNS(null, 'cx', this.x);
    ball.setAttributeNS(null, 'cy', this.y);

    svg.appendChild(ball);
  }

}