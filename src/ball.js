import { collision } from "./collision";

export default class ball {
  constructor(game, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.game = game;

    this.velocity = {
      y: 0,
      x: 0,
      max: 20
    };

    this.collision = collision;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.radius / 2);
    ctx.fill();
  }
  update(deltaTime) {
    this.x += this.velocity.x;

    this.y += this.velocity.y;

    collision(this.game, this);
  }
  start() {
    //Coin flip direction
    let randPlusMinusX = Math.round(Math.random() * 1);
    let randPlusMinusY = Math.round(Math.random() * 1);

    let randomYVel = Math.random() * 1;

    randPlusMinusX ? (this.velocity.x = 5) : (this.velocity.x = -5);

    randPlusMinusY
      ? (this.velocity.y = randomYVel)
      : (this.velocity.y = -randomYVel);

    this.game.currentState = this.game.gameState[1];
  }
}
