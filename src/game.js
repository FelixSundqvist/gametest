import Player from "./player";
import Opponent from "./opponent";
import Ball from "./ball";
import Input from "./input";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.init();
  }
  init() {
    this.start = false;

    this.paddleProperties = [
      { height: 90, width: 30, velocity: 10, isColliding: false }
    ];
    this.gameObjects = [];
    this.players = [];

    this.player = new Player(this, ...this.paddleProperties);
    this.opponent = new Opponent(this, ...this.paddleProperties);
    this.ball = new Ball(this, this.width / 2, this.height / 2, 20);

    //all objects
    this.gameObjects.push(this.player, this.opponent, this.ball);
    //collision objects
    this.players.push(this.player, this.opponent);

    this.input = new Input(this);
  }
  draw(ctx) {
    //draw players and ball
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
