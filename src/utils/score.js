export default class Arena {
  constructor(game) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.game = game;
    this.winScore = 3;
    this.p1Scored = false;
    this.p2Scored = false;
  }
  draw(ctx) {
    ctx.font = "70px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(this.player1Score, 200, 70);
    ctx.fillText("-", this.game.width / 2, 70);
    ctx.fillText(this.player2Score, this.game.width - 200, 70);
    this.score(ctx);
  }
  score(ctx) {
    if (
      this.player1Score <= this.winScore &&
      this.player2Score <= this.winScore
    ) {
      if (this.game.ball.x > this.game.width) {
        //score right
        this.player1Score += 1;
        this.p1Scored = true;
        this.game.reset();
      } else if (this.game.ball.x <= 0) {
        //score left
        this.player2Score += 1;
        this.p2Scored = true;

        this.game.reset();
      }
    }

    if (this.player1Score >= this.winScore) {
      this.win("Player 1", ctx);
    } else if (this.player2Score >= this.winScore) {
      this.win("Player 2", ctx);
    }
  }
  win(winner, ctx) {
    ctx.font = "30px Arial";

    ctx.fillText(winner + " Wins", 220, 150);
    this.game.currentState = this.game.gameState[2];
  }

  update() {}
}
