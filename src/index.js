import "./styles.css";
import Game from "./game.js";

let height = 500;
let width = 800;
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let lastTime = 0;

canvas.height = height;
canvas.width = width;

let game = new Game(width, height);

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, width, height);

  game.draw(ctx);
  game.update(deltaTime);

  requestAnimationFrame(gameLoop);
}

gameLoop();
