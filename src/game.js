import Player from "./player";
import Opponent from "./opponent";
import Ball from "./ball";
import Input from "./input";
import Arena from "./arena";
import Score from "./score";

export default class Game {
  constructor(width, height) {
    this.newGame(width, height);
    this.reset();
  }

  newGame(width, height) {
    this.width = width;
    this.height = height;
    this.arena = new Arena(this);
    this.score = new Score(this);

    this.gameState = {
      0: "NOT RUNNING",
      1: "RUNNING",
      2: "GAME-OVER"
    };
  }

  reset() {
    this.currentState = this.gameState[0];

    this.paddleProperties = [
      { height: 90, width: 20, velocity: 10, isColliding: false }
    ];
    this.gameObjects = [];
    this.players = [];

    this.player = new Player(this, ...this.paddleProperties);
    this.opponent = new Opponent(this, ...this.paddleProperties);
    this.ball = new Ball(this, this.width / 2, this.height / 2, 20);

    //all objects
    this.gameObjects.push(
      this.arena,
      this.player,
      this.opponent,
      this.ball,
      this.score
    );
    //collision objects
    this.players.push(this.player, this.opponent);

    this.input = new Input(this);
  }
  draw(ctx) {
    //draw players and ball
    ctx.fillStyle = "white";
    for (const obj of this.gameObjects) {
      obj.draw(ctx);
    }
  }

  update(deltaTime) {
    for (const obj of this.gameObjects) {
      obj.update(deltaTime);
    }
  }
}
