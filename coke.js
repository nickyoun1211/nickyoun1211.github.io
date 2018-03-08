var canvas;
var ctx;
var redd = "#ED3833"
var coke = "341C1A"

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


   ctx.fillStyle = coke;
   ctx.fillRect(80,130,20,70);
}
