var canvas;
var ctx;
window.onload = init;
function init(){
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 500, 500);
   drawBox(5,5);
}
function drawBox(x,y){
    ctx.save()
    ctx.translate(x,y)
    ctx.fillStyle="red"
    ctx.fillRect(0,0,10,10)
    ctx.restore();

}