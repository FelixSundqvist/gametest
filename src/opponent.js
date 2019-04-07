import { Ai } from "./utils/ai";

export default class Opponent {
  constructor(game, propertiesArr) {
    this.propertiesArr = propertiesArr;
    this.width = propertiesArr.width;
    this.height = propertiesArr.height;
    this.game = game;
    this.isColliding = propertiesArr.isColliding;
    this.stop = false;

    this.position = {
      y: (this.game.height - this.height) / 2,
      x: this.game.width - this.width
    };

    this.velocity = propertiesArr.enemyVelocity;

    this.ai = Ai;
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  moveUp() {
    if (this.position.y < 0) {
      this.stopMovement();
    } else {
      this.velocity = this.propertiesArr.enemyVelocity;
    }
    this.position.y += -this.velocity;
  }

  moveDown() {
    if (this.position.y + this.height >= this.game.height) {
      this.stopMovement();
    } else {
      this.velocity = this.propertiesArr.enemyVelocity;
    }
    this.position.y += this.velocity;
  }

  moveCenter() {
    let center = (this.game.height - this.height) / 2;

    this.y = center;
    /* if (this.y === center) {
      this.stopMovement();
    } else if (this.y > center) {
      this.velocity = this.propertiesArr.enemyVelocity;
    } else {
      this.moveUp();
    }*/
  }
  stopMovement() {
    this.velocity = 0;
    this.stop = true;
  }

  update(deltaTime) {
    setTimeout(() => this.ai(this.game, this), 1000 / 60);
  }
}
