export function collision(game, object) {
  if (object.y < 0 || object.y > game.height) {
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
      //

      //i.isColliding = true;
    }
  }
}

/*if (object.y === i.position.y - i.height) {
  object.velocity.x = -object.velocity.x;
} else if (object.y < i.position.y) {
  object.velocity.y = 2;
  object.velocity.x = -object.velocity.x;
  object.velocity.y = -object.velocity.y;
  console.log("crash");
} else 
*/
