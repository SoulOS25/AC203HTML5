var c1=document.getElementById("myCanvas1");
var ctx1=c1.getContext("2d");
ctx1.fillStyle="rgb(128,128,128)";
ctx1.fillRect(100,100,100,100);
ctx1.strokeRect(80,80,140,140);
ctx1.clearRect(120,120,60,60);

var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");
ctx2.fillStyle="rgb(128,128,128)";
ctx2.fillRect(0,0,150,150);
ctx2.fillRect(150,150,150,150);

var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d");
ctx3.fillStyle="rgb(128,128,128)";
ctx3.fillRect(0,0,300,300);
ctx3.clearRect(20,20,120,120);
ctx3.clearRect(160,20,120,120);
ctx3.clearRect(20,160,120,120);
ctx3.clearRect(160,160,120,120);

var c4=document.getElementById("myCanvas4");
var ctx4=c4.getContext("2d");
ctx4.fillStyle="rgb(128,128,128)";
ctx4.fillRect(0,0,100,100);
ctx4.fillRect(200,0,100,100);
ctx4.fillRect(100,100,100,100);
ctx4.fillRect(0,200,100,100);
ctx4.fillRect(200,200,100,100);

var c5=document.getElementById("myCanvas5");
var ctx5=c5.getContext("2d");
var x=0;
var y=0;
var width=300;
var height=300;
ctx5.fillStyle="rgb(128,128,128)";
ctx5.fillRect(x,y,width,height);
while(width>0){
	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;
	ctx5.clearRect(x,y,width,height);
	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;
	ctx5.fillRect(x,y,width,height);
}