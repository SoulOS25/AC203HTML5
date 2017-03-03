var canvas;
var ctx;
var x=300;
var y=150;
var x2=0;
var y2=0;
var width=600;
var height=300;
var mx=2;
var my=2;
var mx2=4;
var my2=4;
var color1="tomato";
var color2="silver";


function init(){
	canvas=document.getElementById("myCanvas");
	ctx=canvas.getContext("2d")
	return setInterval(drawBall,10);
}
function circle(x,y,r,color){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle=color;
	ctx.fill();
}
function clear(){
	ctx.clearRect(0,0,width,height)
}
function drawBall(){
	clear();
	circle(x,y,25,color1);
	circle(x2,y2,50,color2);
	if(x+mx>width||x+mx<0){
		mx=-mx;
	}
	if(y+my>height||y+my<0){
		my=-my;
	}
	x+=mx;
	y+=my;
	if(x2+mx2>width||x2+mx2<0){
		mx2=-mx2;
	}
	if(y2+my2>height||y2+my2<0){
		my2=-my2;
	}
	x2+=mx2;
	y2+=my2;
}
init();