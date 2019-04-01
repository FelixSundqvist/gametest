export default class Input {
  constructor(player) {
    document.addEventListener("keydown", ev => {
      switch (ev.keyCode) {
        case 38:
          player.moveUp();
          break;
        case 40:
          player.moveDown();
          break;
      }
    });
  }
}
