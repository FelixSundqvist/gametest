export function Ai(game, opponent) {
  //console.log(game.ball.x);
  let distance = 140;

  if (game.ball.x + game.ball.radius > game.width / 2 - distance) {
    if (game.ball.y - game.ball.radius > game.height / 2) {
      opponent.moveDown();
    } else if (game.ball.y + game.ball.radius < game.height / 2) {
      opponent.moveUp();
      //
    }
  }
}
