import 'phaser'

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create,
      update: update,
  },


};

var game = new Phaser.Game(config)

let ground;
let player;
let cursors;
let sky;
let speed = 2;
let cacti;
function preload() {
  this.load.image('sky','./images/sky.png')
  this.load.image('rect', './images/rect.png')
  this.load.image('ground', './images/ground.png')
  this.load.image('cactus', './images/cacti.png')

}


function create() {
  sky = this.physics.add.staticGroup()
  sky.create(400,300,'sky')
  sky.create(1200,900,'sky')
  
  ground = this.physics.add.staticGroup()
  ground.create(400,600-32,'ground')
  
  cacti = this.physics.add.staticGroup()

  player = this.physics.add.sprite(32,600-100,'rect').setScale(0.05)
  player.setBounce(0.2);
  player.setCollideWorldBounds(true);
  
  for(let i = 0; i < 1200/100; i++) {
    cacti.create(i+200,600-64,'cactus')
    this.physics.add.collider(player, cacti);
  }

  this.physics.add.collider(player, ground);

  cursors = this.input.keyboard.createCursorKeys()



}

function update() {
  if(cursors.up.isDown) {
    player.setVelocity(-160)
  }

  player.x = player.x + speed

  if(player.x > 800-33){
    player.x = 32
    
  }
}

