var canvas;
var ctx;
var gold = "#B6872F";
var gold2= "#CB9A37";
var purple= "#A96CFF";
var p2= "#C186FF";
var eye="#353233";
var g ="#B1862E";
var g3 ="#CE9937";
var gg ="#CC9937";
var c = "#17155B";
var c2="#17158D";
var belt ="#6D5440";
var blt2 = "#856F5A";
var pants = "#ADA59A";
var pants2= "#BDB19B";
var shadow ="#858178";
var shoes = "#412F3A";
var shoe = "#5A4350";
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
   ctx.fillStyle = "white";
   ctx.fillRect(0,0,500,500);
    ctx.fillStyle = "black";
    ctx.fillRect(30,10,10,80);
    ctx.fillRect(40,0,90,10);
    ctx.fillRect(130,10,10,20);
    ctx.fillRect(140,30,10,70);
    ctx.fillRect(20,90,30,10);
    ctx.fillRect(130,90,10,10);
    ctx.fillRect(40,100,100,10);
    ctx.fillRect(20,100,10,10);
    ctx.fillRect(150,90,10,20);
    ctx.fillRect(70,70,30,10);
    ctx.fillRect(30,110,10,10);
    ctx.fillRect(40,120,20,10);
    ctx.fillRect(20,120,10,10);
    ctx.fillRect(10,130,10,10);
    ctx.fillRect(0,140,10,30);
    ctx.fillRect(10,170,30,10);
    ctx.fillRect(40,140,10,60);
    ctx.fillRect(30,140,10,10);
    ctx.fillRect(50,190,30,10);
    ctx.fillRect(100,190,30,10);
    ctx.fillRect(80,180,20,10);
    ctx.fillRect(130,140,10,60);
    ctx.fillRect(140,140,10,10);
    ctx.fillRect(110,120,30,10);
    ctx.fillRect(140,110,10,10);
    ctx.fillRect(150,120,10,10);
    ctx.fillRect(160,130,10,10);
    ctx.fillRect(170,140,10,30);
    ctx.fillRect(140,170,30,10);
    ctx.fillStyle = gold;
    ctx.fillRect(30,100,10,10);
    ctx.fillRect(40,110,20,10);
    ctx.fillRect(150,140,10,10);
    ctx.fillRect(140,150,10,20);
    ctx.fillRect(150,160,20,10);
    ctx.fillStyle = gold2;
    ctx.fillRect(140,100,10,10);
    ctx.fillRect(40,130,10,10);
    ctx.fillRect(130,130,10,10);
    ctx.fillRect(150,150,20,10);
    ctx.fillRect(160,140,10,10);
    ctx.fillStyle = purple;
    ctx.fillRect(50,90,80,10);
    ctx.fillRect(40,10,10,80);
    ctx.fillRect(70,80,10,10);
    ctx.fillRect(50,80,10,10);
    ctx.fillRect(90,80,10,10);
    ctx.fillRect(110,80,10,10);
    ctx.fillRect(10,140,10,30);
    ctx.fillRect(20,160,20,10);
    ctx.fillRect(20,130,10,10);
    ctx.fillRect(30,120,10,10);
    ctx.fillStyle = p2;
    ctx.fillRect(50,60,90,10);
    ctx.fillRect(120,70,20,20);
    ctx.fillRect(80,50,10,10);
    ctx.fillRect(50,30,90,20);
    ctx.fillRect(120,50,20,10);
    ctx.fillRect(50,10,80,20);
    ctx.fillRect(50,70,20,10);
    ctx.fillRect(60,80,10,10);
    ctx.fillRect(80,80,10,10);
    ctx.fillRect(100,80,10,10);
    ctx.fillRect(100,70,20,10);
    ctx.fillRect(20,140,10,20);
    ctx.fillRect(30,130,10,10);
    ctx.fillRect(30,150,10,10);
    ctx.fillRect(140,130,20,10);
    ctx.fillRect(140,120,10,10);
    ctx.fillStyle = eye;
    ctx.fillRect(50,50,10,10);
    ctx.fillRect(70,50,10,10);
    ctx.fillRect(90,50,10,10);
    ctx.fillRect(110,50,10,10);
    ctx.fillStyle = g;
    ctx.fillRect(60,120,50,10);
    ctx.fillStyle = g3;
    ctx.fillRect(60,110,80,10);
    ctx.fillStyle = gg;
    ctx.fillRect(80,130,10,10);
    ctx.fillStyle = c;
    ctx.fillRect(50,140,30,10);
    ctx.fillRect(90,140,40,10);
    ctx.fillRect(50,130,10,10);
    ctx.fillRect(120,130,10,10);
    ctx.fillStyle = c2;
    ctx.fillRect(80,140,10,10);
    ctx.fillRect(60,130,20,10);
    ctx.fillRect(90,130,30,10);
    ctx.fillStyle = belt;
    ctx.fillRect(50,150,10,10);
    ctx.fillRect(50,160,20,10);
    ctx.fillRect(100,160,10,10);
    ctx.fillStyle = blt2;
    ctx.fillRect(60,150,70,10);
    ctx.fillRect(110,160,20,10);
    ctx.fillStyle = pants;
    ctx.fillRect(50,170,30,10);
    ctx.fillRect(70,160,10,10);
    ctx.fillRect(90,160,10,20);
    ctx.fillRect(100,170,10,10);
    ctx.fillStyle = pants2;
    ctx.fillRect(110,170,20,10);
    ctx.fillStyle = shadow;
    ctx.fillRect(80,160,10,20);
    ctx.fillStyle = shoes;
    ctx.fillRect(50,180,20,10);
    ctx.fillRect(100,180,20,10);
    ctx.fillStyle = shoe;
    ctx.fillRect(70,180,10,10);
    ctx.fillRect(120,180,10,10);
}    