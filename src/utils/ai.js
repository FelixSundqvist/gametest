export function Ai(game, opponent) {
  //console.log(game.ball.x);
  let distance = 140;
  let movedOver;
  if (game.ball.x - game.ball.radius > game.width / 2) {
    movedOver = false;

    if (game.ball.y > opponent.position.y + opponent.height) {
      opponent.moveDown();
    } else if (game.ball.y < opponent.position.y) {
      opponent.moveUp();
    } else {
      console.log("hello");
    }
    //  movedOver = true;
    //  opponent.moveCenter();
  } else if (game.ball.x < game.width / 2) {
    opponent.stopMovement();
  }
}
