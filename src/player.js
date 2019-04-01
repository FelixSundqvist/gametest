export default class Player {
  constructor(game, propertiesArr) {
    this.width = propertiesArr.width;
    this.height = propertiesArr.height;
    this.game = game;

    this.position = {
      y: (this.game.height - this.height) / 2,
      x: 0
    };
    this.top = this.position.y;
    this.bottom = this.position.y + this.height;

    this.velocity = 10;
  }
  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  moveUp() {
    this.position.y += -this.velocity;
    console.log(this.top, this.bottom);
  }
  moveDown() {
    this.position.y += this.velocity;
    console.log(this.top, this.bottom);
  }
  update(deltaTime) {
    this.top = this.position.y;
    this.bottom = this.position.y + this.height;
  }
}
