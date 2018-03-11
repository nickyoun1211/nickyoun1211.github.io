var canvas;
var ctx;
window.onload = init;
function init(){
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 792, 860);
    drawCircle(189,441,25.5)
    drawRectangle(316,544,67,176)
    drawRectangle(429,544,67,176)
    drawRectangle(368,191,78,191);
    drawRectangle(275,78,272,150);
    drawRectangle(276,266,262,297);
    drawRectangle(297,352,113,185);
    drawRectangle(312,378,18,17);
    drawRectangle(346,378,18,17);
    drawRectangle(380,378,18,17);
    drawRectangle(312,432,18,17);
    drawRectangle(346,432,18,17);
    drawRectangle(380,432,18,17);
    drawRectangle(312,486,18,17);
    drawRectangle(346,486,18,17);
    drawRectangle(380,486,18,17);
    drawRectangle(341,285,98,4)
    drawRectangle(341,305,98,4)
    drawRectangle(341,324,98,4)
}
function drawRectangle(x,y,w,h){
    ctx.strokeStyle ="black";
    ctx.lineWidth=3;
    ctx.save();
    ctx.translate(x,y)
    ctx.fillStyle="white"
    ctx.fillRect(0,0,w,h)
    ctx.strokeRect(0,0,w,h)
    ctx.restore();
   
}
function drawCircle(x,y,r){
    ctx.strokeStyle ="black";
    ctx.lineWidth=3;
    ctx.save();
    ctx.translate(x,y)
    ctx.beginPath();
    ctx.arc(0,0,r,0,2*Math.PI)
    ctx.stroke();
    ctx.restore();
} 