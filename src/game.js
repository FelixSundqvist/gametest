import Player from "./player";
import Opponent from "./opponent";
import Ball from "./ball";
import Input from "./input";

export default class Game {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.paddleProperties = [{ height: 140, width: 20 }];

    this.gameObjects = [];
    this.players = [];

    this.player = new Player(this, ...this.paddleProperties);
    this.opponent = new Opponent(this, ...this.paddleProperties);
    this.ball = new Ball(this, this.width / 2, this.height / 2, 20);

    this.gameObjects.push(this.player, this.opponent, this.ball);
    this.players.push(this.player, this.opponent);

    this.input = new Input(this.player);
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
