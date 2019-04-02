import { collision } from "./collision";

export default class ball {
  constructor(game, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.game = game;
    this.shooting = false;

    this.velocity = {
      y: 0,
      x: 0
    };
    this.runVelocity = {
      y: 2,
      x: 10
    };

    this.collision = collision;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, this.radius / 2);
    ctx.fill();
  }
  update(deltaTime) {
    this.positionBall();
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    collision(this.game, this);
  }
  ballRandom() {
    //choose random start
    let randStart = Math.round(Math.random() * 1);
    randStart
      ? (this.game.score.p1Scored = true)
      : (this.game.score.p2Scored = true);
  }
  shootBall() {
    if (this.game.score.p2Scored === true) {
      this.velocity.x = this.runVelocity.x;
      this.shooting = true;
    } else if (this.game.score.p1Scored === true) {
      this.velocity.x = -this.runVelocity.x;
      this.shooting = true;
    } else {
      this.velocity.x = this.runVelocity.x;
    }

    this.game.score.p1Scored = false;
    this.game.score.p2Scored = false;
  }

  positionBall() {
    //console.log(this.game.score);
    if (this.shooting === false && this.game.score.p2Scored === true) {
      this.x =
        this.game.player.position.x + this.game.player.width + this.radius * 2;
      this.y = this.game.player.position.y + 140 / 2;
    } else if (this.shooting === false && this.game.score.p1Scored === true) {
      this.x =
        this.game.opponent.position.x -
        this.game.opponent.width -
        this.radius * 2;
      this.y = this.game.opponent.position.y + 140 / 2;
    } else {
    }
  }
}
