export default class Arena {
  constructor(game) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.game = game;
    this.winScore = 3;
  }
  draw(ctx) {
    ctx.font = "70px Arial";
    ctx.fillText(this.player1Score, 200, 70);
    ctx.fillText("-", this.game.width / 2, 70);
    ctx.fillText(this.player2Score, this.game.width - 200, 70);
    this.score(ctx);
  }
  score(ctx) {
    if (this.game.ball.x <= 0) {
      this.game.reset();
      this.player2Score += 1;
    } else if (this.game.ball.x > this.game.width) {
      this.game.reset();
      this.player1Score += 1;
    }

    if (this.player1Score === this.winScore) {
      this.win("Player 1", ctx);
    } else if (this.player2Score === this.winScore) {
      this.win("Player 2", ctx);
    }
  }
  win(winner, ctx) {
    ctx.clearRect(0, 0, this.game.width, this.game.height);
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(winner + " Wins", this.game.width / 2, 100);
    this.game.currentState = this.gameState[2];
  }

  update() {}
}
