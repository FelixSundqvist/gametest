import Player from "./player";
import Opponent from "./opponent";
import Ball from "./ball";

import Input from "./utils/input";
import Arena from "./utils/arena";
import Score from "./utils/score";

import StartScreen from "./utils/startscreen";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.paddleProperties = [
      {
        height: 120,
        width: 15,
        velocity: 20,
        enemyVelocity: 6,
        isColliding: false
      }
    ];
    this.gameState = {
      0: "NOT RUNNING",
      1: "RUNNING",
      2: "GAME-OVER",
      3: "PAUSE",
      4: "START SCREEN"
    };

    this.newGame();
  }

  start() {
    if (this.gameObjects.includes(this.startScreen)) {
      let index = this.gameObjects.indexOf(this.startScreen);
      this.gameObjects.splice(index);
    }

    //running when clicking space
    this.currentState = this.gameState[1];

    //shoot ball
    this.ball.shootBall();
  }

  newGame() {
    this.currentState = this.gameState[1];
    this.arena = new Arena(this);
    this.score = new Score(this);
    this.reset();
  }

  reset() {
    //not running

    this.gameObjects = [];
    this.collisionObjects = [];

    this.player = new Player(this, ...this.paddleProperties);
    this.opponent = new Opponent(this, ...this.paddleProperties);

    this.ball = new Ball(this, this.width / 2, this.height / 2, 15);

    if (this.currentState === this.gameState[4]) {
      this.startScreen = new StartScreen(this);
      this.gameObjects.push(this.startScreen);
    }

    //all objects
    this.gameObjects.push(
      this.arena,
      this.player,
      this.opponent,
      this.ball,
      this.score
    );

    if (this.currentState === this.gameState[4]) {
      this.startScreen = new StartScreen(this);
      this.gameObjects.push(this.startScreen);
    }

    //collision objects
    this.collisionObjects.push(this.player, this.opponent);
    this.currentState = this.gameState[0];
    new Input(this);
  }

  draw(ctx) {
    //draw players and ball
    ctx.clearRect(0, 0, this.width, this.height);
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
