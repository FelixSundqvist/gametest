export default class Arena {
  constructor(game) {
    this.picture = document.getElementById("arena");
    this.game = game;
  }
  draw(ctx) {
    //ctx.drawImage(this.picture, 0, 0);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, this.game.width, this.game.height);
  }
  update() {}
}
