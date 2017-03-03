var canvas;
var ctx;
var x=420;
var y=420;
var r=20;
var mx=0;
var my=0;
var width=500;
var height=500;

var goodX;
var goodY;
var badX;
var badY;
var spriteHeight=80;
var spriteWidth=80;

var goodCollision=false;
var badCollision=false;
var score=0;

function init(){
	canvas=document.getElementById("myCanvas");
	ctx=canvas.getContext("2d")

	goodX=Math.floor(Math.random()*421)
	goodY=Math.floor(Math.random()*421)
	badX=Math.floor(Math.random()*421)
	badY=Math.floor(Math.random()*421)

	window.onkeydown=keydownControl;
	return setInterval(draw,10);
}

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle="tomato";
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height)
}

function drawBadGuy(badX,badY){
	ctx=document.getElementById("myCanvas").getContext("2d");
	var bad=new Image();
	bad.src="squid.png"
	ctx.drawImage(bad,badX,badY,80,80);
}

function drawGoodGuy(goodX,goodY){
	ctx=document.getElementById("myCanvas").getContext("2d");
	var good=new Image();
	good.src="patrick.png"
	ctx.drawImage(good,goodX,goodY,80,80);
}

function collisionCheck(){
	if((x>=badX)&&(x<=badX+spriteWidth)&&(y>=badY)&&(y<=badY+spriteHeight)){
		badCollision=true;
	}
	else{
		badCollision=false;
	}
	if((x>=goodX)&&(x<=goodX+spriteWidth)&&(y>=goodY)&&(y<=goodY+spriteHeight)){
		goodCollision=true;
	}
	else{
		goodCollision=false;
	}
}

function collisionHandle(){
	if (badCollision==true){
		badX=Math.floor(Math.random()*421);
		badY=Math.floor(Math.random()*421);
		score-=1;
		document.getElementById("scoreSystem").innerHTML="Score: "+score;
	}
	if (goodCollision==true){
		goodX=Math.floor(Math.random()*421);
		goodY=Math.floor(Math.random()*421);
		score+=1;
		document.getElementById("scoreSystem").innerHTML="Score: "+score;
	}
}

function draw(){
	clear();
	circle(x,y,r);
	drawBadGuy(badX,badY);
	drawGoodGuy(goodX,goodY);

	collisionCheck();

	collisionHandle();

	if(x+r>width||x-r<0){
		mx=-mx;
	}
	if(y+r>height||y-r<0){
		my=-my;
	}

	x+=mx;
	y+=my;
}

function keydownControl(e){
	if(e.keyCode==38){
		my=-2;
		mx=0;
	}
    else if(e.keyCode==40){
    	my=+2;
    	mx=0;
    }
    else if(e.keyCode==37){
    	mx=-2;
    	my=0;
    }
    else if(e.keyCode==39){
    	mx=+2;
    	my=0;
    }
	
}

init();