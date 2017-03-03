var moon=new Image();
var flower=new Image();
var people=new Image();
var car=new Image();
moon.src="moon.png"
flower.src="flower.png"
people.src="people.png"
car.src="car.png"

moon.onload=function(){
	ctx.drawImage(moon,600,50,100,100)
}
flower.onload=function(){
	ctx.drawImage(flower,200,300,100,100)
}
people.onload=function(){
	ctx.drawImage(people,500,300,100,100)
}
car.onload=function(){
	ctx.drawImage(car,375,270,100,100)
}

var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d');
ctx.fillStyle="green";
ctx.fillRect(0,350,800,150);
ctx.fillStyle="cyan";
ctx.fillRect(0,0,800,350);
ctx.beginPath();
ctx.arc(100,100,50,0,6.28);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="yellow";
ctx.fill();
ctx.beginPath();
ctx.moveTo(375,350);
ctx.lineTo(350,500);
ctx.lineTo(450,500);
ctx.lineTo(425,350);
ctx.closePath();
ctx.stroke();
ctx.fillStyle="grey";
ctx.fill();