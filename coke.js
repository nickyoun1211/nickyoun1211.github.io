var canvas;
var ctx;
var redd = "#ED3833"
var inside = "#311109"

window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
   ctx.fillStyle = "white";
   ctx.fillRect(0,0,500,500);

   ctx.fillStyle = "black";
   ctx.fillRect(60,80,10,60);
   ctx.fillRect(50,140,10,30);
   ctx.fillRect(40,170,10,40);
   ctx.fillRect(30,210,10,80);
   ctx.fillRect(40,290,10,40);
   ctx.fillRect(30,330,10,40);
   ctx.fillRect(40,370,90,10);
   ctx.fillRect(130,330,10,40);
   ctx.fillRect(120,290,10,40);
   ctx.fillRect(130,210,10,80);
   ctx.fillRect(120,170,10,40);
   ctx.fillRect(110,140,10,30);
   ctx.fillRect(100,80,10,60);
   ctx.fillRect(70,80,30,10);
   ctx.fillRect(70,100,20,10);
   ctx.fillRect(80,60,10,10);
   ctx.fillRect(80,40,10,10);
   ctx.fillRect(70,30,10,10);
   ctx.fillRect(80,20,10,10);
   ctx.fillRect(90,30,10,10);
   ctx.fillRect(100,60,10,10);
   ctx.fillRect(110,50,10,10);
   ctx.fillRect(130,40,20,10);
   ctx.fillRect(120,20,10,20);
   ctx.fillRect(130,10,20,10);
   ctx.fillRect(150,20,10,20);
   ctx.fillRect(50,30,10,10);


   ctx.fillStyle = redd;
   ctx.fillRect(40,210,90,10);
   ctx.fillRect(40,220,10,10);
   ctx.fillRect(60,220,10,10);
   ctx.fillRect(80,220,10,10);
   ctx.fillRect(100,220,30,10);
   ctx.fillRect(50,230,50,10);
   ctx.fillRect(110,230,10,10);
   ctx.fillRect(40,240,10,10);
   ctx.fillRect(90,240,10,10);
   ctx.fillRect(40,250,90,10);
   ctx.fillRect(40,60,20,10);
   ctx.fillRect(30,50,20,10);
   ctx.fillRect(20,40,20,10);
   ctx.fillRect(20,30,10,10);


   ctx.fillStyle = inside;
   ctx.fillRect(80,130,20,50);
   ctx.fillRect(70,140,10,40)
   ctx.fillRect(60,140,10,20)
   ctx.fillRect(50,170,10,10)
   ctx.fillRect(50,190,70,20)
   ctx.fillRect(60,180,50,10)
   ctx.fillRect(100,150,10,10)
   ctx.fillRect(110,170,10,10)
   ctx.fillRect(70,260,40,100)
   ctx.fillRect(60,280,10,90)
   ctx.fillRect(40,330,20,40)
   ctx.fillRect(110,330,20,30)
   ctx.fillRect(70,360,10,10)
   ctx.fillRect(120,260,10,30)
   ctx.fillRect(40,260,10,30)
   ctx.fillRect(50,260,10,20)
   ctx.fillRect(60,260,10,10)
   ctx.fillRect(110,260,10,10)
   ctx.fillRect(50,290,10,10)
}

 