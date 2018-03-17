var canvas;
var ctx;
window.onload = init;
function init(){
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);

    ctx.save()
    ctx.translate(150,250);
    ctx.rotate(Math.PI /4);
    ctx.fillStyle="red"
    ctx.fillRect(0,0,50,100)
    ctx.restore();

    ctx.save()
    ctx.translate(350,320);
    ctx.rotate(3*Math.PI /4);
    ctx.fillStyle="red"
    ctx.fillRect(0,0,50,100)
    ctx.restore();
}