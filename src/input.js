export default class Input {
  constructor(game) {
    let player1 = game.player;

    document.addEventListener("keydown", ev => {
      if (
        game.currentState === game.gameState[1] ||
        game.currentState === game.gameState[0]
      ) {
        if (ev.keyCode === 87) player1.moveUp(); //w
        if (ev.keyCode === 83) player1.moveDown(); //s
      }
      if (game.currentState === game.gameState[0]) {
        if (ev.keyCode === 32) game.start(); //space
      } else if (game.currentState === game.gameState[2]) {
        if (ev.keyCode === 32) game.newGame(); //space
      }
    });
  }
}
