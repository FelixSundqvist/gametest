export function collision(game, object) {
  for (let i of game.players) {
    if (
      object.x - object.radius < i.width ||
      object.x + object.radius > game.width - i.width
    ) {
      if (
        object.y - object.radius < i.bottom &&
        object.y - object.radius > i.top
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
