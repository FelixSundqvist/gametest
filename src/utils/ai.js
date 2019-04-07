export function Ai(game, opponent) {
  //console.log(game.ball.x);
  let distance = 140;
  let movedOver;
  if (game.ball.x + game.ball.radius > game.width / 2) {
    movedOver = false;
    if (
      game.ball.y - game.ball.radius > game.height / 2 + 20 &&
      movedOver === false
    ) {
      opponent.moveDown();
    } else if (
      game.ball.y + game.ball.radius < game.height / 2 &&
      movedOver === false
    ) {
      opponent.moveUp();
    }
  } else if (game.ball.x < game.width / 2) {
    movedOver = true;
    opponent.moveCenter();
  }
}
