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
	platforms=game.add.group();
	platforms.enableBody=true;
	var ground=platforms.create(0,game.world.height-50,'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable=true;
	var ledge=platforms.create(-150,250,'ground');
	ledge.body.immovable=true;
	var ledge=platforms.create(400,400,'ground');
	ledge.body.immovable=true;
	player=game.add.sprite(32,game.world.height-150,'dude')
	player.animations.add('left',[0,1,2,3],10,true)
	player.animations.add('right',[5,6,7,8],10,true)
	game.physics.arcade.enable(player);
	player.body.bounce.y=0.2;
	player.body.gravity.y=300;
	player.body.collideWorldBounds=true;
	cursors=game.input.keyboard.createCursorKeys();
	stars=game.add.group();
	stars.enableBody=true;
	for (var i=0;i<12;i++){
		var star=stars.create(60*i,20,'star');
		star.body.gravity.y=200;
		star.body.bounce.y=0.6+Math.random()*0.3;
	}
}

function update() {
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(stars,platforms);
	game.physics.arcade.overlap(player,stars,collectStar,null,this);
	if(cursors.left.isDown){
		player.body.velocity.x=-150;
		player.animations.play('left');
	}
	else if(cursors.right.isDown){
		player.body.velocity.x=150;
		player.animations.play('right');
	}
	else{
		player.body.velocity.x=0;
		player.animations.stop();
		player.frame=4;
	}
	if(cursors.up.isDown&&player.body.touching.down){
		player.body.velocity.y=-300;
	}
	function collectStar(player,star){
		star.kill();
	}
}