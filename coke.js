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
   ctx.fillRect(260,80,10,60);
   ctx.fillRect(250,140,10,30);
   ctx.fillRect(240,170,10,40);
   ctx.fillRect(230,210,10,80);
   ctx.fillRect(240,290,10,40);
   ctx.fillRect(230,330,10,40);
   ctx.fillRect(240,370,90,10);
   ctx.fillRect(330,330,10,40);
   ctx.fillRect(320,290,10,40);
   ctx.fillRect(330,210,10,80);
   ctx.fillRect(320,170,10,40);
   ctx.fillRect(310,140,10,30);
   ctx.fillRect(300,80,10,60);
   ctx.fillRect(270,80,30,10);
   ctx.fillRect(270,100,20,10);
   ctx.fillRect(280,60,10,10);
   ctx.fillRect(280,40,10,10);
   ctx.fillRect(270,30,10,10);
   ctx.fillRect(280,20,10,10);
   ctx.fillRect(290,30,10,10);
   ctx.fillRect(300,60,10,10);
   ctx.fillRect(310,50,10,10);
   ctx.fillRect(330,40,20,10);
   ctx.fillRect(320,20,10,20);
   ctx.fillRect(330,10,20,10);
   ctx.fillRect(350,20,10,20);
   ctx.fillRect(250,30,10,10);


   ctx.fillStyle = redd;
   ctx.fillRect(240,210,90,10);
   ctx.fillRect(240,220,10,10);
   ctx.fillRect(260,220,10,10);
   ctx.fillRect(280,220,10,10);
   ctx.fillRect(300,220,30,10);
   ctx.fillRect(250,230,50,10);
   ctx.fillRect(310,230,10,10);
   ctx.fillRect(240,240,10,10);
   ctx.fillRect(290,240,10,10);
   ctx.fillRect(240,250,90,10);
   ctx.fillRect(240,60,20,10);
   ctx.fillRect(230,50,20,10);
   ctx.fillRect(220,40,20,10);
   ctx.fillRect(220,30,10,10);


   ctx.fillStyle = inside;
   ctx.fillRect(280,130,20,50);
   ctx.fillRect(270,140,10,40);
   ctx.fillRect(260,140,10,20);
   ctx.fillRect(250,170,10,10);
   ctx.fillRect(250,190,70,20);
   ctx.fillRect(260,180,50,10);
   ctx.fillRect(300,150,10,10);
   ctx.fillRect(310,170,10,10);
   ctx.fillRect(270,260,40,100);
   ctx.fillRect(260,280,10,90);
   ctx.fillRect(240,330,20,40);
   ctx.fillRect(310,330,20,30);
   ctx.fillRect(270,360,10,10);
   ctx.fillRect(320,260,10,30);
   ctx.fillRect(240,260,10,30);
   ctx.fillRect(250,260,10,20);
   ctx.fillRect(260,260,10,10);
   ctx.fillRect(310,260,10,10);
   ctx.fillRect(250,290,10,10);
}

 