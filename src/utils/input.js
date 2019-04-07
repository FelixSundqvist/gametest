export default class Input {
  constructor(game) {
    let player1 = game.player;

    document.addEventListener("keydown", ev => {
      if (ev.keyCode === 27) game.currentState = game.gameState[3];

      if (
        game.currentState === game.gameState[1] ||
        game.currentState === game.gameState[0]
      ) {
        if (ev.keyCode === 87) player1.moveUp(); //w
        if (ev.keyCode === 83) player1.moveDown(); //s
      }
      //spacebar
      if (ev.keyCode === 32) {
        if (game.currentState === game.gameState[0]) {
          game.start();
        } else if (game.currentState === game.gameState[2]) {
          game.newGame();
        } else if (game.currentState === game.gameState[4]) {
          // start menu
          game.currentState = game.gameState[0];
        }
      }
    });
  }
}
