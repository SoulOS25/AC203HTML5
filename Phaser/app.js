var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
function preload() {
	game.load.image('sky',"assets/sky.png");
	game.load.image('star',"assets/star.png");
	game.load.image('ground',"assets/platform.png");
	game.load.spritesheet('dude',"assets/dude.png",32,48);
	game.load.spritesheet('baddie',"assets/baddie.png",32,32);
}
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE)
	game.add.sprite(0,0,'sky');
}

function update() {
}