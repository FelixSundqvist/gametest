import Player from "./player";
import Opponent from "./opponent";
import Ball from "./ball";
import Input from "./input";
import Arena from "./arena";
import Score from "./score";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.paddleProperties = [
      { height: 150, width: 20, velocity: 20, isColliding: false }
    ];
    this.gameState = {
      0: "NOT RUNNING",
      1: "RUNNING",
      2: "GAME-OVER"
    };

    this.newGame();
  }

  newGame() {
    this.player1Score = 0;
    this.player2Score = 0;
    this.arena = new Arena(this);
    this.score = new Score(this);

    this.reset();
  }

  reset() {
    this.currentState = this.gameState[0];
    this.gameObjects = [];
    this.collisionObjects = [];
    this.player = new Player(this, ...this.paddleProperties);
    this.opponent = new Opponent(this, ...this.paddleProperties);
    this.ball = new Ball(this, this.width / 2, this.height / 2, 15);

    //all objects
    this.gameObjects.push(
      this.arena,
      this.player,
      this.opponent,
      this.ball,
      this.score
    );
    //collision objects
    this.collisionObjects.push(this.player, this.opponent);
    this.input = new Input(this);
  }

  start() {
    let ballVelocity = 10;

    //Coin flip direction

    let randPlusMinusX = Math.round(Math.random() * 1);
    let randPlusMinusY = Math.round(Math.random() * 2);

    let randomYVel = Math.random() * 1;

    randPlusMinusX
      ? (this.ball.velocity.x = ballVelocity)
      : (this.ball.velocity.x = -ballVelocity);

    randPlusMinusY
      ? (this.ball.velocity.y = randomYVel)
      : (this.ball.velocity.y = -randomYVel);

    this.currentState = this.gameState[1];
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
