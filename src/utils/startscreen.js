export default class Input {
  constructor(game) {
    this.game = game;
  }
  draw(ctx) {
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fillRect(0, 0, this.game.width, this.game.height);

    ctx.fillStyle = "white";
    ctx.font = "30px Arial";
    ctx.fillText(
      "Press Space To Start",
      this.game.width / 2,
      this.game.height / 2
    );
  }

  update() {}
}
