export default class Player {
  constructor(game, propertiesArr) {
    this.propertiesArr = propertiesArr;
    this.width = propertiesArr.width;
    this.height = propertiesArr.height;
    this.game = game;
    this.isColliding = propertiesArr.isColliding;

    this.position = {
      y: (this.game.height - this.height) / 2,
      x: 0
    };

    this.velocity = propertiesArr.velocity;
  }
  draw(ctx) {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  moveUp() {
    if (this.position.y < 0) {
      this.velocity = 0;
    } else {
      this.velocity = this.propertiesArr.velocity;
    }
    this.position.y += -this.velocity;
  }
  moveDown() {
    if (this.position.y + this.height >= this.game.height) {
      this.velocity = 0;
    } else {
      this.velocity = this.propertiesArr.velocity;
    }
    this.position.y += this.velocity;
  }
  stop() {
    this.velocity = 0;
  }
  update(deltaTime) {}
}
