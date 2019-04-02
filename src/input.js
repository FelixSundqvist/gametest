export default class Input {
  constructor(game) {
    let controllerObjects = game.players;
    let player1 = controllerObjects[0];
    let player2 = controllerObjects[1];

    document.addEventListener("keydown", ev => {
      if (game.currentState === game.gameState[1]) {
        if (ev.keyCode === 87) player1.moveUp(); //w
        if (ev.keyCode === 83) player1.moveDown(); //s
        if (ev.keyCode === 38) player2.moveUp(); //up
        if (ev.keyCode === 40) player2.moveDown(); //down
      } else if (game.currentState === game.gameState[0]) {
        if (ev.keyCode === 32) game.ball.start(); //space
      }
    });

    /*document.addEventListener("keyup", ev => {
      if (game.start === true) {
        if (ev.keyCode === 87) player1.stop(); //w
        if (ev.keyCode === 83) player1.stop(); //s
        if (ev.keyCode === 38) player2.stop(); //up
        if (ev.keyCode === 40) player2.stop(); //down
      }
    });*/
  }
}
