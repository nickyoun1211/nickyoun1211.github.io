var canvas;
var ctx;
window.onload = init;
function init() {
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(300,100);
    ctx.lineTo(90,50);
    ctx.fillStyle = "red";
    ctx.fill();

}