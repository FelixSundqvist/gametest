export default class Hitbox {
  constructor(x, y, width, height, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.fillStyle = "rgba(255,0,0, 0.5)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(velocityX, velocityY) {
    this.x += velocityX;
    this.y += velocityY;
  }
}
