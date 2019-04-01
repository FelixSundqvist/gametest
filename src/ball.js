import { collision } from "./collision";

export default class ball {
  constructor(game, x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.game = game;

    this.velocity = {
      y: 0,
      x: -5
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
    if (collision(this.game, this)) {
      this.velocity.x = -this.velocity.x;
    }
  }
}
