var canvas;
var ctx;
window.onload = init;
function init(){
    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 792, 860);
    ctx.lineWidth=3;
    ctx.strokeStyle ="black";
    
    drawCircle(552,162,24)
    drawCircle(269,162,24)
    drawCircle(411,75,24)

    drawArm(290,310,40,170,Math.PI /4)
    drawArm(166,454,40,92,20*Math.PI/11)
    drawArm(500,350,40,160,7*Math.PI /4)
    drawArm(635,460,40,92,15*Math.PI/12)

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
    drawCircle(463,120,24);
    drawCircle(360,120,24);
    drawCircle(492,288,9.5);
    drawCircle(492,324.5,9.5);
    drawCircle(492,361,9.5);
    drawCircle(492,398,9.5);
    drawCircle(492,361,9.5);
    drawCircle(492,434.5,9.5);
    drawCircle(492,471,9.5);
    drawCircle(492,507.5,9.5);
    drawCircle(492,544,9.5);
    drawCircle(189,441,25.5);
    drawCircle(620,440,23.5);
    drawCircle(250,558,46.5)
    drawCircle(708,348,46.5)

    drawFeet(349,745,55);
    drawFeet(470,745,55);
    drawShoe();
}
function drawRectangle(x,y,w,h){
    ctx.save();
    ctx.translate(x,y)
    ctx.fillStyle="white"
    ctx.fillRect(0,0,w,h)
    ctx.strokeRect(0,0,w,h)
    ctx.restore();
   
}
function drawCircle(x,y,r){
    ctx.save();
    ctx.translate(x,y)
    ctx.beginPath();
    ctx.arc(0,0,r,0,2*Math.PI)
    ctx.fillStyle="white"
    ctx.fill();
    ctx.stroke();
    ctx.restore();
} 
function drawArm(x,y,w,h,angle){
    ctx.save();
    ctx.translate(x,y)
    ctx.rotate(angle);
    ctx.strokeRect(0,0,w,h)
    ctx.restore();
}
function drawFeet(x,y,r){
    ctx.save();
    ctx.translate(x,y)
    ctx.beginPath();
    
    ctx.arc(0,0,r,Math.PI,0)
    ctx.fillStyle="white"
    ctx.fill();
    ctx.lineWidth=10;
    ctx.stroke();
    ctx.restore();
}
function drawShoe(){
    ctx.beginPath();
    ctx.moveTo(289,749);
    ctx.lineTo(530,749);
    ctx.lineWidth=10;
    ctx.stroke();
}
