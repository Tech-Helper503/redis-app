import { clearScreen } from './utils'


class Dino {
    /**
     * 
     * @param {Number} constantSpeed 
     * @param {Number} startingSpeed 
     * @param {Number} [acceleration=0]
     */
    constructor(constantSpeed, startingSpeed,acceleration=0) {
      /** @type {Number} */
      this.constantSpeed = constantSpeed;
      
      /** @type {Number} */
      this.startingSpeed = startingSpeed;
      
      /** @type {Number} */
      this.speed = this.startingSpeed
      
      /** @type {Number} */
      this.acceleration = acceleration
      
      /** @type {Number} */
      this.x = 0
      
      /** @type {Number} */
      this.y = 0
      
      /** @type {Number} */
      this.time = 0
    }
  
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
    */
    draw(ctx) {
      ctx.fillRect(this.x,this.y,64,64)
      this.update(ctx)
    }
  
    /**
     * 
     * @param {CanvasRenderingContext2D} ctx 
     */
    update(ctx) {
      this.time = this.time++
      this.x = this.acceleration === 0 ? this.x + this.constantSpeed : this.x + (this.time * this.acceleration)
      clearScreen(ctx)
      this.draw(ctx)
    }
}

export {Dino}