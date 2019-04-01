export default class Opponent {
  constructor(game, propertiesArr) {
    this.width = propertiesArr.width;
    this.height = propertiesArr.height;
    this.game = game;

    this.position = {
      //y: (this.game.height - this.height) / 2,
      y: 20,
      x: this.game.width - this.width
    };

    this.top = this.position.y;
    this.bottom = this.position.y + this.height;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    //console.log(this.top, this.bottom);
    this.top = this.position.y;
    this.bottom = this.position.y + this.height;
  }
}
