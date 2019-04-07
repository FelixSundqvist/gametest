export function collision(game, object) {
  if (object.y - object.radius < 0 || object.y + object.radius > game.height) {
    object.velocity.y = -object.velocity.y;
  }
  for (let i of game.collisionObjects) {
    if (
      object.x < i.position.x + i.width &&
      object.x > i.position.x - i.width &&
      object.y < i.position.y + i.height &&
      object.y > i.position.y
    ) {
      object.velocity.x = -object.velocity.x;
      if (object.y < i.position.y + i.height / 2) {
        //upper part
        object.velocity.y = -2;
      } else if (object.y > i.position.y - i.height) {
        //lower part
        object.velocity.y = 2;
      } else {
        object.velocity.y = 0;
      }
    }
  }
}
