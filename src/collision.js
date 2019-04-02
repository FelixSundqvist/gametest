export function collision(game, object) {
  if (object.y < 0 || object.y > game.height) {
    object.velocity.y = -object.velocity.y;
  }
  /*  if (object.x > game.width) {
    object.velocity.x = -object.velocity.x;
  } else  */
  for (let i of game.players) {
    if (
      object.x < i.position.x + i.width &&
      object.x > i.position.x - i.width &&
      object.y < i.position.y + i.height &&
      object.y > i.position.y

      //&&object.y + object.radius > game.player.position.y + game.player.height
    ) {
      object.velocity.x = -object.velocity.x;
      i.isColliding = true;
    } else {
      i.isColliding = false;
    }
  }
}
